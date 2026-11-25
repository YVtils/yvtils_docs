import assert from 'node:assert/strict'
import { test } from 'node:test'
import { colorPages, resolveDocsRoute } from '../src/components/layout/docsRoutes.ts'
import { moduleGuides, pagesForModule } from '../src/pages/collection/modules.ts'

test('every documentation page resolves to its own route', () => {
  for (const page of colorPages) {
    assert.deepEqual(resolveDocsRoute(page.href, ''), { kind: 'color', page })
  }
  for (const module of moduleGuides) {
    for (const page of pagesForModule(module)) {
      assert.deepEqual(resolveDocsRoute(page.href, ''), { kind: 'module', module, page })
    }
  }
})

test('all module sections have unique routes and resolve with their guide', () => {
  const paths = new Set(colorPages.map((page) => page.href))
  const ids = new Set()
  for (const module of moduleGuides) {
    assert.ok(!ids.has(module.slug))
    ids.add(module.slug)
    assert.equal(module.sections[0].id, 'overview')
    assert.equal(new Set(module.sections.map((section) => section.id)).size, module.sections.length)
    for (const section of module.sections) {
      assert.ok(section.paragraphs.length > 0)
      if (section.image) assert.ok(section.image.trim())
      if (section.settings) {
        assert.equal(new Set(section.settings.map((setting) => setting.name)).size, section.settings.length)
        assert.ok(section.settings.every((setting) => setting.name.trim() && setting.description.trim()))
      }
      if (section.id === 'permissions') {
        assert.ok(section.permissions?.length)
        const names = section.permissions.map((permission) => permission.name)
        assert.equal(new Set(names).size, names.length)
        for (const permission of section.permissions) {
          assert.ok(permission.name.trim() && permission.description.trim())
        }
      }
    }
    for (const page of pagesForModule(module)) {
      assert.ok(!paths.has(page.href), `Duplicate path: ${page.href}`)
      paths.add(page.href)
      assert.deepEqual(resolveDocsRoute(page.href, ''), { kind: 'module', module, page })
    }
  }
})

test('Status section links and legacy configuration URL resolve through its module guide', () => {
  const statusModule = moduleGuides.find((module) => module.slug === 'status')
  assert.ok(statusModule)
  const pages = pagesForModule(statusModule)
  for (const page of pages) {
    assert.deepEqual(resolveDocsRoute('/docs/collection/status', `#${page.id}`), { kind: 'module', module: statusModule, page })
    assert.deepEqual(resolveDocsRoute('/status/config.yml', `#${page.id}`), { kind: 'module', module: statusModule, page })
  }
  assert.deepEqual(resolveDocsRoute('/status/config.yml', ''), { kind: 'module', module: statusModule, page: pages[2] })
})

test('unknown paths do not resolve to a documentation page', () => {
  assert.equal(resolveDocsRoute('/docs/collection/status/unknown', ''), undefined)
  assert.equal(resolveDocsRoute('/docs/utils/color-codes/unknown', ''), undefined)
})
