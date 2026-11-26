#!/bin/sh
set -eu

source_dir="${DOCS_SOURCE_DIR:-/opt/docs}"
site_dir="${DOCS_SITE_DIR:-/site}"
allow_overwrite="${DOCS_ALLOW_OVERWRITE:-false}"
case "$allow_overwrite" in
  true|false) ;;
  *)
    echo "DOCS_ALLOW_OVERWRITE must be true or false" >&2
    exit 1
    ;;
esac
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
    if [ "$allow_overwrite" != true ]; then
      echo "Refusing to overwrite immutable documentation snapshot $version" >&2
      exit 1
    fi

    staging="$(mktemp -d "$site_dir/.incoming-$version.XXXXXX")"
    backup="$(mktemp -d "$site_dir/.previous-$version.XXXXXX")"
    cleanup() {
      if [ -n "$backup" ] && [ -d "$backup/snapshot" ] && [ ! -e "$site_dir/$version" ]; then
        mv "$backup/snapshot" "$site_dir/$version"
      fi
      if [ -n "$staging" ] && [ -d "$staging" ]; then
        rm -rf -- "$staging"
      fi
      if [ -n "$backup" ] && [ -d "$backup" ]; then
        rm -rf -- "$backup"
      fi
    }
    trap cleanup EXIT
    trap 'exit 1' HUP INT TERM
    cp -R "$source_dir/$version/." "$staging/"
    chmod 755 "$staging"
    mv "$site_dir/$version" "$backup/snapshot"
    mv "$staging" "$site_dir/$version"
    staging=''
    rm -rf -- "$backup"
    backup=''
    trap - EXIT
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
  for file in sitemap.xml robots.txt; do
    if [ ! -f "$source_dir/$file" ]; then
      echo "Missing required file: $source_dir/$file" >&2
      exit 1
    fi
  done
  if [ -d "$source_dir/fonts" ]; then
    mkdir -p "$site_dir/fonts"
    cp -R "$source_dir/fonts/." "$site_dir/fonts/"
  fi
  for file in sitemap.xml robots.txt; do
    cp "$source_dir/$file" "$site_dir/.$file.next"
    mv "$site_dir/.$file.next" "$site_dir/$file"
  done
  cp "$source_dir/index.html" "$site_dir/.index.html.next"
  mv "$site_dir/.index.html.next" "$site_dir/index.html"
  printf '%s\n' "$version" > "$site_dir/.release-version.next"
  mv "$site_dir/.release-version.next" "$site_dir/release-version"
fi
echo "Published $version; default version is $latest"
