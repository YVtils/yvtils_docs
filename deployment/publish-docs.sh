#!/bin/sh
set -eu

source_dir="${DOCS_SOURCE_DIR:-/opt/docs}"
site_dir="${DOCS_SITE_DIR:-/site}"
version="$(cat "$source_dir/release-version")"
if [ "${#version}" -ne 9 ] || ! printf '%s\n' "$version" | grep -Eq '^v[0-9]{2}\.[0-9]{2}\.[0-9]{2}$'; then
  echo "Invalid documentation release version: $version" >&2
  exit 1
fi
test -f "$source_dir/$version/index.html"
test -f "$source_dir/index.html"
mkdir -p "$site_dir"

if [ -e "$site_dir/$version" ]; then
  if ! diff -qr "$source_dir/$version" "$site_dir/$version"; then
    echo "Refusing to overwrite immutable documentation snapshot $version" >&2
    exit 1
  fi
else
  staging="$(mktemp -d "$site_dir/.incoming-$version.XXXXXX")"
  trap 'rm -rf -- "$staging"' EXIT HUP INT TERM
  cp -R "$source_dir/$version/." "$staging/"
  chmod 755 "$staging"
  mv "$staging" "$site_dir/$version"
  trap - EXIT HUP INT TERM
fi

# Delayed dispatches may add archives but must not roll the default site back.
latest="$version"
if [ -f "$site_dir/release-version" ]; then
  previous="$(cat "$site_dir/release-version")"
  latest="$(printf '%s\n%s\n' "$previous" "$version" | LC_ALL=C sort | tail -n 1)"
fi
if [ "$latest" = "$version" ]; then
  if [ -d "$source_dir/fonts" ]; then
    mkdir -p "$site_dir/fonts"
    cp -R "$source_dir/fonts/." "$site_dir/fonts/"
  fi
  cp "$source_dir/index.html" "$site_dir/.index.html.next"
  mv "$site_dir/.index.html.next" "$site_dir/index.html"
  printf '%s\n' "$version" > "$site_dir/.release-version.next"
  mv "$site_dir/.release-version.next" "$site_dir/release-version"
fi
echo "Published $version; default version is $latest"
