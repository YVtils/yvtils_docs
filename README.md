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

The initial and only published documentation version is `v26.10.01`, matching
the Collection plugin's version tag. The header includes a version selector.
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
2. Commit and tag the docs with the same tag as the plugin (for example
   `git tag v26.10.01` for this initial release). Publish tags only as part of
   the coordinated release; building does not create or push tags.
3. Build and deploy the new root and version snapshot, **retaining previously
   deployed version directories**. Vite cleans local `dist` on each build, so
   retain archives on the host or restore them from prior release artifacts.
   Never rebuild an old version with new guide content.

Each archived build has its own registry and frozen guides; its selector lists
the versions known when it was released. Automated cross-repository tag syncing
and deployment are not configured yet. The existing MkDocs sources and workflow
from the repository are preserved; that workflow still deploys only the legacy
site from `main`/`master`, not this React branch.
