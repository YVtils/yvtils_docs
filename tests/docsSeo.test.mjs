import assert from 'node:assert/strict'
import { test } from 'node:test'
import { colorPages } from '../src/components/layout/docsRoutes.ts'
import { docsSiteUrl, getDocsSeo, homeSeoPage } from '../src/components/layout/docsSeo.ts'
import { moduleGuides, pagesForModule } from '../src/pages/collection/modules.ts'

test('homepage and module overview pages are indexable with versioned canonicals', () => {
  const homepage = getDocsSeo('/', homeSeoPage)
  assert.equal(homepage.robots, 'index,follow')
  assert.equal(homepage.canonical, `${docsSiteUrl}/v26.10.01/`)

  for (const module of moduleGuides) {
    const overview = getDocsSeo(pagesForModule(module)[0].href, {
      title: `${module.name} module | YVtils Docs`,
      description: module.sections[0].paragraphs[0],
      indexable: true,
    })
    assert.equal(overview.robots, 'index,follow')
    assert.equal(new URL(overview.canonical).pathname.startsWith('/v26.10.01/docs/collection/'), true)
  }
})

test('all non-overview documentation routes are marked noindex', () => {
  const nonOverviewPaths = [
    ...moduleGuides.flatMap((module) => pagesForModule(module).slice(1).map((page) => page.href)),
    ...colorPages.map((page) => page.href),
    '/status/config.yml',
  ]
  for (const path of nonOverviewPaths) {
    assert.equal(getDocsSeo(path).robots, 'noindex,follow', path)
  }
  assert.equal(getDocsSeo('/status/config.yml').canonical, `${docsSiteUrl}/v26.10.01/status/config.yml`)
})
