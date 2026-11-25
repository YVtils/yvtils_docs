export const docsVersions = ['v26.10.01'] as const
export const currentDocsVersion = docsVersions[0]

export function resolveVersionedPath(path: string) {
  const normalized = path.replace(/\/+$/, '') || '/'
  const match = /^\/(v[^/]+)(\/.*)?$/.exec(normalized)
  if (!match) return { version: currentDocsVersion, path: normalized }
  // Other releases must serve their own frozen build, never this release's content.
  if (match[1] !== currentDocsVersion) return undefined
  return { version: currentDocsVersion, path: match[2] || '/' }
}

export function versionedHref(href: string, version: string = currentDocsVersion) {
  if (!docsVersions.some((item) => item === version)) {
    throw new Error(`Unknown documentation version: ${version}`)
  }
  if (!href.startsWith('/') || href.startsWith('//')) return href
  const suffixIndex = href.search(/[?#]/)
  const path = suffixIndex < 0 ? href : href.slice(0, suffixIndex)
  const suffix = suffixIndex < 0 ? '' : href.slice(suffixIndex)
  const resolved = resolveVersionedPath(path)
  if (!resolved) throw new Error(`Unknown documentation version in URL: ${href}`)
  return `/${version}${resolved.path === '/' ? '/' : resolved.path}${suffix}`
}
