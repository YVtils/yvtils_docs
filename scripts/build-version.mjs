import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { currentDocsVersion } from '../src/components/layout/docsVersions.ts'
import { docsSiteUrl, getDocsSeo, homeSeoPage } from '../src/components/layout/docsSeo.ts'
import { colorPages } from '../src/components/layout/docsRoutes.ts'
import { moduleGuides, pagesForModule } from '../src/pages/collection/modules.ts'

// Keep the root entry point for legacy URLs and an isolated snapshot for release URLs.
const output = new URL('../dist/', import.meta.url)
const entries = await readdir(output)
const snapshot = new URL(`${currentDocsVersion}/`, output)
await mkdir(snapshot)
await Promise.all(entries.map((entry) => cp(
  new URL(entry, output),
  new URL(entry, snapshot),
  { recursive: true },
)))
await writeFile(new URL('release-version', output), `${currentDocsVersion}\n`)

const indexHtml = await readFile(new URL('index.html', output), 'utf8')
const indexablePages = [
  { path: '/', ...homeSeoPage },
  ...moduleGuides.map((module) => ({
    path: pagesForModule(module)[0].href,
    title: `${module.name} module | YVtils Docs`,
    description: module.sections[0].paragraphs[0],
    indexable: true,
  })),
]
const allPages = [
  ...indexablePages,
  ...moduleGuides.flatMap((module) => pagesForModule(module).slice(1).map((page) => ({
    path: page.href,
    title: `${module.name} ${page.label.toLowerCase()} | YVtils Docs`,
    description: module.sections.find((section) => section.id === page.id)?.paragraphs[0] ?? '',
    indexable: false,
  }))),
  ...colorPages.map((page) => ({
    path: page.href,
    title: `${page.label} | YVtils Docs`,
    description: 'Minecraft color codes and MiniMessage formatting for YVtils Collection.',
    indexable: false,
  })),
  {
    path: '/status/config.yml',
    title: 'Status configuration | YVtils Docs',
    description: 'Configuration reference for the YVtils Status module.',
    indexable: false,
  },
]

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function renderPageHtml(page) {
  const metadata = getDocsSeo(page.path, page)
  let html = indexHtml.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(metadata.title)}</title>`)
  const tags = [
    ['name="description"', metadata.description],
    ['name="robots"', metadata.robots],
    ['property="og:title"', metadata.title],
    ['property="og:description"', metadata.description],
    ['property="og:url"', metadata.canonical],
    ['name="twitter:title"', metadata.title],
    ['name="twitter:description"', metadata.description],
  ]
  for (const [selector, content] of tags) {
    const tag = new RegExp(`<meta ${selector} content="[^"]*"`)
    html = html.replace(tag, `<meta ${selector} content="${escapeHtml(content)}"`)
  }
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${escapeHtml(metadata.canonical)}"`,
  )
  return html
}

const homeHtml = renderPageHtml({ path: '/', ...homeSeoPage })
await writeFile(new URL('index.html', output), homeHtml)
await writeFile(new URL('index.html', snapshot), homeHtml)

for (const base of [output, snapshot]) {
  for (const page of allPages) {
    if (page.path === '/') continue
    const pageFile = page.path.endsWith('.yml')
      ? join(base.pathname, page.path.slice(1))
      : join(base.pathname, page.path.slice(1), 'index.html')
    await mkdir(dirname(pageFile), { recursive: true })
    await writeFile(pageFile, renderPageHtml(page))
  }
}

const sitemapUrls = indexablePages.map((page) => {
  const metadata = getDocsSeo(page.path, page)
  return `  <url><loc>${metadata.canonical}</loc></url>`
}).join('\n')
await writeFile(new URL('sitemap.xml', output), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  sitemapUrls,
  '</urlset>',
  '',
].join('\n'))
await writeFile(new URL('robots.txt', output), `User-agent: *\nAllow: /\nSitemap: ${docsSiteUrl}/sitemap.xml\n`)
console.log(`Created documentation snapshot: dist/${currentDocsVersion}/`)
