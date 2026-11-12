import assert from 'node:assert/strict'
import { test } from 'node:test'
import { currentDocsVersion, docsVersions, resolveVersionedPath, versionedHref } from '../src/components/layout/docsVersions.ts'
import { colorPages, resolveDocsRoute, statusPages } from '../src/components/layout/docsRoutes.ts'
import { moduleGuides, pagesForModule } from '../src/pages/collection/modules.ts'

test('documentation versions use unique Collection release tags, newest first', () => {
  assert.equal(currentDocsVersion, docsVersions[0])
  assert.equal(new Set(docsVersions).size, docsVersions.length)
  assert.deepEqual([...docsVersions], [...docsVersions].sort().reverse())
  for (const version of docsVersions) {
    assert.match(version, /^v\d{2}\.\d{2}\.\d{2}$/)
    assert.equal(version.length, 9)
  }
})

test('versioned routes and legacy aliases resolve to the same pages', () => {
  const pages = [...statusPages, ...colorPages, ...moduleGuides.flatMap(pagesForModule)]
  for (const page of pages) {
    const href = versionedHref(page.href)
    assert.equal(href, `/${currentDocsVersion}${page.href}`)
    const resolved = resolveVersionedPath(`${href}/`)
    assert.equal(resolved.version, currentDocsVersion)
    assert.deepEqual(resolveDocsRoute(resolved.path, ''), resolveDocsRoute(page.href, ''))
    assert.equal(resolveVersionedPath(page.href).path, page.href)
  }
})

test('home, legacy config URLs, query strings and anchors are preserved', () => {
  assert.equal(versionedHref('/'), `/${currentDocsVersion}/`)
  assert.equal(resolveVersionedPath(`/${currentDocsVersion}`).path, '/')
  assert.equal(versionedHref('/status/config.yml#permissions'), `/${currentDocsVersion}/status/config.yml#permissions`)
  assert.equal(versionedHref('/docs/collection/discord?test=1#overview'), `/${currentDocsVersion}/docs/collection/discord?test=1#overview`)
  assert.equal(versionedHref(`/${currentDocsVersion}/docs/collection/status`), `/${currentDocsVersion}/docs/collection/status`)
  assert.equal(versionedHref('#minecraft-plugins'), '#minecraft-plugins')
  assert.equal(versionedHref('https://github.com/YVtils/yvtils_docs'), 'https://github.com/YVtils/yvtils_docs')
  assert.equal(versionedHref('//example.com'), '//example.com')
})

test('unknown releases never silently render current documentation', () => {
  assert.equal(resolveVersionedPath('/v99.01.01/docs/collection/status'), undefined)
  assert.equal(resolveVersionedPath('/v99.01.01'), undefined)
  assert.throws(() => versionedHref('/', 'v99.01.01'), /Unknown documentation version/)
  assert.throws(() => versionedHref('/v99.01.01/docs/collection/status'), /Unknown documentation version/)
  assert.equal(resolveDocsRoute(resolveVersionedPath(`/${currentDocsVersion}/docs/unknown`).path, ''), undefined)
})
