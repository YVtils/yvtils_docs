import assert from 'node:assert/strict'
import { test } from 'node:test'
import { colorPages, resolveDocsRoute, statusPages } from '../src/components/layout/docsRoutes.ts'
import { moduleGuides, pagesForModule } from '../src/pages/collection/modules.ts'

test('every documentation page resolves to its own route', () => {
  for (const [kind, pages] of [['status', statusPages], ['color', colorPages]]) {
    for (const page of pages) {
      assert.deepEqual(resolveDocsRoute(page.href, ''), { kind, page })
    }
  }
})

test('all module sections have unique routes and resolve with their guide', () => {
  const paths = new Set([...statusPages, ...colorPages].map((page) => page.href))
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

test('old Status section links and configuration URL still resolve', () => {
  for (const page of statusPages) {
    assert.deepEqual(resolveDocsRoute('/docs/collection/status', `#${page.id}`), { kind: 'status', page })
    assert.deepEqual(resolveDocsRoute('/status/config.yml', `#${page.id}`), { kind: 'status', page })
  }
  assert.deepEqual(resolveDocsRoute('/status/config.yml', ''), { kind: 'status', page: statusPages[2] })
})

test('unknown paths do not resolve to a documentation page', () => {
  assert.equal(resolveDocsRoute('/docs/collection/status/unknown', ''), undefined)
  assert.equal(resolveDocsRoute('/docs/utils/color-codes/unknown', ''), undefined)
})
