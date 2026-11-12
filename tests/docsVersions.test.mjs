import assert from 'node:assert/strict'
import { test } from 'node:test'
import { currentDocsVersion, docsVersions, resolveVersionedPath, versionedHref } from '../src/components/layout/docsVersions.ts'
import { colorPages, resolveDocsRoute, statusPages } from '../src/components/layout/docsRoutes.ts'
import { moduleGuides, pagesForModule } from '../src/pages/collection/modules.ts'

test('the initial documentation version matches the Collection release', () => {
  assert.equal(currentDocsVersion, 'v26.10.01')
  assert.deepEqual(docsVersions, ['v26.10.01'])
})

test('versioned routes and legacy aliases resolve to the same pages', () => {
  const pages = [...statusPages, ...colorPages, ...moduleGuides.flatMap(pagesForModule)]
  for (const page of pages) {
    const href = versionedHref(page.href)
    assert.equal(href, `/v26.10.01${page.href}`)
    const resolved = resolveVersionedPath(`${href}/`)
    assert.equal(resolved.version, currentDocsVersion)
    assert.deepEqual(resolveDocsRoute(resolved.path, ''), resolveDocsRoute(page.href, ''))
    assert.equal(resolveVersionedPath(page.href).path, page.href)
  }
})

test('home, legacy config URLs, query strings and anchors are preserved', () => {
  assert.equal(versionedHref('/'), '/v26.10.01/')
  assert.equal(resolveVersionedPath('/v26.10.01').path, '/')
  assert.equal(versionedHref('/status/config.yml#permissions'), '/v26.10.01/status/config.yml#permissions')
  assert.equal(versionedHref('/docs/collection/discord?test=1#overview'), '/v26.10.01/docs/collection/discord?test=1#overview')
  assert.equal(versionedHref('/v26.10.01/docs/collection/status'), '/v26.10.01/docs/collection/status')
  assert.equal(versionedHref('#minecraft-plugins'), '#minecraft-plugins')
  assert.equal(versionedHref('https://github.com/YVtils/yvtils_docs'), 'https://github.com/YVtils/yvtils_docs')
  assert.equal(versionedHref('//example.com'), '//example.com')
})

test('unknown releases never silently render current documentation', () => {
  assert.equal(resolveVersionedPath('/v99.01.01/docs/collection/status'), undefined)
  assert.equal(resolveVersionedPath('/v99.01.01'), undefined)
  assert.throws(() => versionedHref('/', 'v99.01.01'), /Unknown documentation version/)
  assert.throws(() => versionedHref('/v99.01.01/docs/collection/status'), /Unknown documentation version/)
  assert.equal(resolveDocsRoute(resolveVersionedPath('/v26.10.01/docs/unknown').path, ''), undefined)
})
