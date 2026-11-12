import { execFileSync } from 'node:child_process'
import { appendFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

export function validateRelease(version, commit) {
  if (typeof version !== 'string' || version.length !== 9 || !/^v\d{2}\.\d{2}\.\d{2}$/.test(version)) {
    throw new Error('Release version must use the Collection tag format vYY.MM.NN')
  }
  if (typeof commit !== 'string' || commit.length !== 40 || !/^[a-f0-9]{40}$/.test(commit)) {
    throw new Error('docs_commit must be a full lowercase 40-character commit SHA')
  }
  return { version, commit }
}

export function validateReleaseCommit(commit, cwd = process.cwd()) {
  execFileSync('git', ['cat-file', '-e', `${commit}^{commit}`], { cwd, stdio: 'pipe' })
  execFileSync('git', ['merge-base', '--is-ancestor', commit, 'origin/main'], { cwd, stdio: 'pipe' })
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { version, commit } = validateRelease(process.env.RELEASE_VERSION, process.env.DOCS_COMMIT)
  validateReleaseCommit(commit)
  appendFileSync(process.env.GITHUB_OUTPUT, `version=${version}\ncommit=${commit}\n`)
  console.log(`Validated Collection release ${version} at docs commit ${commit}`)
}
