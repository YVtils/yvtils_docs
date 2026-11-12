import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { mkdtempSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'
import { validateRelease, validateReleaseCommit } from '../scripts/validate-release.mjs'

test('release payload requires an exact Collection version and immutable commit SHA', () => {
  const sha = 'a'.repeat(40)
  assert.deepEqual(validateRelease('v26.10.01', sha), { version: 'v26.10.01', commit: sha })
  for (const version of [undefined, '', '26.10.01', 'v26.10.1', 'v26.10.01\n', '../main', 'v26.10.01; echo unsafe']) {
    assert.throws(() => validateRelease(version, sha), /Release version/)
  }
  for (const commit of [undefined, '', 'main', 'a'.repeat(7), '-'.repeat(40), `${sha}\n`]) {
    assert.throws(() => validateRelease('v26.10.01', commit), /docs_commit/)
  }
})

test('only docs commits reachable from production main are approved', (t) => {
  const directory = mkdtempSync(join(tmpdir(), 'docs-release-git-'))
  t.after(() => rmSync(directory, { recursive: true, force: true }))
  const git = (...args) => execFileSync('git', args, {
    cwd: directory,
    env: { ...process.env, GIT_AUTHOR_NAME: 'Test', GIT_AUTHOR_EMAIL: 'test@example.com', GIT_COMMITTER_NAME: 'Test', GIT_COMMITTER_EMAIL: 'test@example.com' },
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim()
  git('init', '-b', 'main')
  git('commit', '--allow-empty', '-m', 'Approved docs')
  const approved = git('rev-parse', 'HEAD')
  git('update-ref', 'refs/remotes/origin/main', approved)
  assert.doesNotThrow(() => validateReleaseCommit(approved, directory))
  git('checkout', '-b', 'unmerged')
  git('commit', '--allow-empty', '-m', 'Unapproved docs')
  assert.throws(() => validateReleaseCommit(git('rev-parse', 'HEAD'), directory))
  assert.throws(() => validateReleaseCommit('0'.repeat(40), directory))
})

test('deployment retains archives, is idempotent, rejects mutation, and prevents rollback', (t) => {
  const directory = mkdtempSync(join(tmpdir(), 'docs-deployment-'))
  t.after(() => rmSync(directory, { recursive: true, force: true }))
  const site = join(directory, 'site')
  const publishScript = fileURLToPath(new URL('../deployment/publish-docs.sh', import.meta.url))
  function source(version, content = version) {
    const root = mkdtempSync(join(directory, 'build-'))
    mkdirSync(join(root, version, 'assets'), { recursive: true })
    mkdirSync(join(root, 'fonts'))
    writeFileSync(join(root, 'fonts', 'test.ttf'), 'font')
    writeFileSync(join(root, 'index.html'), content)
    writeFileSync(join(root, version, 'index.html'), content)
    writeFileSync(join(root, version, 'assets', 'app.js'), content)
    writeFileSync(join(root, 'release-version'), `${version}\n`)
    return root
  }
  const publish = (root) => spawnSync('sh', [publishScript], {
    env: { ...process.env, DOCS_SOURCE_DIR: root, DOCS_SITE_DIR: site },
    encoding: 'utf8',
  })
  const initial = source('v26.10.01')
  assert.equal(publish(initial).status, 0)
  assert.equal(statSync(join(site, 'v26.10.01')).mode & 0o777, 0o755, 'Nginx must be able to traverse the snapshot')
  assert.equal(publish(initial).status, 0, 'Identical retries should succeed')
  assert.equal(publish(source('v26.11.01')).status, 0)
  assert.equal(readFileSync(join(site, 'v26.10.01', 'index.html'), 'utf8'), 'v26.10.01')
  assert.equal(readFileSync(join(site, 'index.html'), 'utf8'), 'v26.11.01')
  assert.equal(publish(source('v26.09.01')).status, 0)
  assert.equal(readFileSync(join(site, 'index.html'), 'utf8'), 'v26.11.01', 'Delayed release must not roll back root')
  assert.equal(readFileSync(join(site, 'release-version'), 'utf8'), 'v26.11.01\n')
  const mutation = publish(source('v26.10.01', 'changed content'))
  assert.notEqual(mutation.status, 0)
  assert.match(mutation.stderr, /Refusing to overwrite immutable/)
  assert.equal(readFileSync(join(site, 'v26.10.01', 'index.html'), 'utf8'), 'v26.10.01')
  const invalid = source('v26.12.01')
  writeFileSync(join(invalid, 'release-version'), '../escape\n')
  assert.notEqual(publish(invalid).status, 0)
})
