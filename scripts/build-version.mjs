import { cp, mkdir, readdir, writeFile } from 'node:fs/promises'
import { currentDocsVersion } from '../src/components/layout/docsVersions.ts'

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
console.log(`Created documentation snapshot: dist/${currentDocsVersion}/`)
