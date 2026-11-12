# Yvtils Docs

A documentation landing page for YVtils products, including Minecraft plugins,
built with Vite, React, and TypeScript. The interface uses components and theme styles from
the YVtils design system.

Repository: https://github.com/YVtils/yvtils_docs

## Getting started

Install dependencies and start the development server:

```sh
pnpm install
pnpm dev
```

The `@yvtils/designsystem-v2` dependency is an alias for
`@yvtils/designsystem@0.3.1`. It is fetched from GitHub Packages using the
registry configured in `.npmrc`. Access to the package may require GitHub
Packages authentication.

The design system's bundled Sour Gummy font is copied to `public/fonts` because
its stylesheet loads the font from `/fonts`. Update the copy when upgrading the
design system.

Run `pnpm build` to type-check and create a production build, `pnpm preview`
to preview it, `pnpm typecheck` to check types, and `pnpm lint` to lint the source.
Run `pnpm test` to test the MiniMessage preview and documentation routes (Node.js 22.18 or newer).

The shared header, footer, and navigation (including the documentation sidebar)
live in `src/components/layout`. The sidebar's Introduction links to the
collection overview on the landing page; module sections are grouped beneath it.
The sidebar is shared by the landing page and documentation pages.
The header, footer, and desktop sidebar remain in place while page content
scrolls; the mobile sidebar opens as a drawer.
The landing page and its sections live in `src/pages/home`. The TypeScript
configuration maps the design-system alias to its bundled declarations because
the package's advertised types path does not match the published files.
The header's theme switcher uses the design system's persisted theme preference.

The feature guides start at `/docs/collection/<module>`, with separate pages for
the sections supported by each module. They describe the in-progress recode
branch at the source revision linked in each guide. Screenshot placeholders
identify visuals still needed. The Status guide starts at `/docs/collection/status`, with separate commands,
configuration, and permissions pages. The old section links and
`/status/config.yml` remain supported. These pages describe the in-progress
recode branch at the source revision linked on the overview. A deployed static
host must serve `index.html` for these paths so direct links and reloads work.

The color guide starts at `/docs/utils/color-codes` and includes separate pages
for tags, colors, decorations, and a limited client-side MiniMessage preview.
The preview displays unsupported tags literally and does not simulate gradients,
events, or Minecraft's exact rendering.

## Documentation versions

The initial documentation version is `v26.10.01`, matching
the Collection plugin's version tag. The header includes a version selector
using the design system's Popover component.
The version registry and current release are defined in
`src/components/layout/docsVersions.ts`; the homepage badge uses the same value.
The npm package version is independent of the plugin's date-based version.

Release links use `/v26.10.01/`, for example
`/v26.10.01/docs/collection/discord`. Existing unversioned links (including the
legacy Status configuration URL) still work as aliases for the current release.
Navigation keeps the release prefix. Unknown versions show a not-found page
instead of incorrectly displaying current content.

`pnpm build` creates both the root entry point and a self-contained snapshot in
`dist/v26.10.01/`. Production asset URLs include the release prefix so future
releases do not overwrite archived assets. Deploy the contents of `dist`.
The host must serve each version's own `index.html` for its nested routes and
the root `index.html` for unversioned routes.

For a future Collection release:

1. Update the guides alongside the plugin changes. Add the exact plugin tag
   first in `docsVersions`, retaining previous versions in the selector.
2. Merge that documentation commit into `main`. Publish the matching tag in
   `YVtils/yvtils_collection`, then send the dispatch described below with the
   exact docs commit SHA. The workflow creates the docs tag; do not move an
   existing release tag.
3. The workflow builds and deploys a new snapshot, **retaining previously
   deployed version directories** in the external Docker volume. Never rebuild
   an old version with new guide content. Local builds still clean `dist`.

Each archived build has its own registry and frozen guides; its selector lists
the versions known when it was released.

## GitHub Actions and deployment

`validate.yml` installs with a frozen lockfile and runs tests, lint, type-checking
and the production build on pull requests and pushes to `main`.
`deploy.yml` runs only from `main`, either on a `collection-release`
repository dispatch or manually with the same two inputs:

```json
{
  "event_type": "collection-release",
  "client_payload": {
    "version": "v26.10.01",
    "docs_commit": "<full 40-character docs commit SHA merged into main>"
  }
}
```

In the Collection release workflow, **after publishing the plugin tag**, send
the payload to `POST /repos/YVtils/yvtils_docs/dispatches`. For example:

```yaml
- name: Release matching documentation
  env:
    GH_TOKEN: ${{ secrets.DOCS_DISPATCH_TOKEN }}
    COLLECTION_TAG: ${{ github.ref_name }}
    DOCS_COMMIT: ${{ inputs.docs_commit }}
  run: |
    jq -n --arg version "$COLLECTION_TAG" --arg commit "$DOCS_COMMIT" \
      '{event_type:"collection-release",client_payload:{version:$version,docs_commit:$commit}}' |
      gh api --method POST repos/YVtils/yvtils_docs/dispatches --input -
```

The Collection workflow must supply the `docs_commit` input (or another explicit
mapping to the approved docs commit). `DOCS_DISPATCH_TOKEN` must be a GitHub App
token or fine-grained token with **Contents: write** on this docs repository;
the Collection repository's normal `GITHUB_TOKEN` cannot dispatch across repos.
This sender snippet still needs to be installed in the Collection repository.
Dispatch workflows must be merged into this repository's default branch (`main`)
before GitHub will recognize the event.

The release workflow rejects malformed tags/SHAs, commits not reachable from
`main`, missing Collection tags, mismatched source versions, and attempts to
move an existing docs tag. All validation happens before production deployment.
It builds/pushes a version-and-commit image tag and deploys by its immutable
registry digest. Docs tag creation is performed explicitly in the same workflow;
it does not depend on tag pushes triggering another workflow.

Configure these **repository secrets**:

| Secret | Purpose |
| --- | --- |
| `REGISTRY_URL` | Docker registry hostname, e.g. `registry.yvtils.net` |
| `REGISTRY_IMAGE_NAME` | Full docs image name, e.g. `registry.yvtils.net/yvtils-docs` |
| `REGISTRY_USERNAME`, `REGISTRY_PASSWORD` | Registry push/pull credentials |
| `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY` | Deployment server access |
| `SSH_HOST_FINGERPRINT` | Trusted SSH server SHA256 host-key fingerprint |
| `DEPLOY_DIR` | Dedicated absolute Compose directory on the server |
| `PACKAGES_READ_TOKEN` | Optional GitHub Packages read token when the default token lacks access |
| `DEPENDENCYTRACK_URL`, `DEPENDENCYTRACK_API_KEY` | Dependency-Track endpoint and BOM upload credentials |

Grant this repo's `GITHUB_TOKEN` access to the private design-system package, or
set `PACKAGES_READ_TOKEN` with `read:packages`. Package credentials are passed
to Docker using a BuildKit secret, not an image build argument.
Configure the `production` GitHub environment for required approvals if desired.
Registry/package secrets must be repository-level because the build job runs
before the production environment gate.

The server needs Docker Engine, Docker Compose with `up --wait` support, and the
existing external `traefik_proxy` network with `websecure` and the `le` TLS
certificate resolver. `deployment/compose.yml` follows the Traefik web-service
setup, exposing container port 80 only inside that network and routing
`docs.yvtils.net` to the separate `yvtils-docs` service. Point DNS at Traefik.
The deployment writes Compose configuration and a digest-pinned `DOCS_IMAGE`
to `.env` inside `DEPLOY_DIR`.

The external `yvtils-docs-content` volume is created automatically and must be
backed up; do not delete it during image/container cleanup. A short-lived
publisher container stages each snapshot, refuses different content for an
existing version, and atomically switches entry points. Identical retries are
safe; a delayed older release adds an archive without rolling the default
version backward. Nginx serves each release's own SPA entry point and returns
404 for absent releases or static assets. Compose waits for a successful
HTTP health check; deployment is not claimed to be zero-downtime.

After deployment, the reusable `dependency-track.yml` scans the exact released
docs commit and uploads a CycloneDX SBOM under the same release version. Set
`DEPENDENCYTRACK_PROJECT_NAME` as a repository variable to your desired project
name (default: `YVtils/yvtils_docs`). Uploads use `projectName`, `projectVersion`
and `autoCreate=true` so each release is a separate project version; the API
key needs BOM upload and project-creation permissions. The old
`DEPENDENCYTRACK_PROJECT_ID` setting is no longer used because a fixed UUID
would upload every release into the same project version.
The SBOM workflow can also be rerun manually with a docs ref and matching version.
