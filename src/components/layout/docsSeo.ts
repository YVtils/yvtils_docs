import { currentDocsVersion, versionedHref } from './docsVersions.ts'

export const docsSiteUrl = 'https://docs.yvtils.net'

export type SeoPage = {
  title: string
  description: string
  indexable: boolean
}

export const homeSeoPage: SeoPage = {
  title: 'YVtils Docs | Minecraft Server Plugin Guides',
  description: 'Practical guides to YVtils Collection Minecraft server plugin modules, configuration, commands, and permissions.',
  indexable: true,
}

export function getDocsSeo(path: string, page?: SeoPage) {
  const isHome = path === '/' && !page
  const metadata = page ?? (isHome ? homeSeoPage : {
    title: 'YVtils Docs',
    description: 'Documentation for YVtils Collection Minecraft server plugins.',
    indexable: false,
  })
  const resolvedPath = versionedHref(isHome ? '/' : path, currentDocsVersion)
  const canonicalPath = resolvedPath.endsWith('/') || /\.[^/]+$/.test(resolvedPath)
    ? resolvedPath
    : `${resolvedPath}/`

  return {
    ...metadata,
    robots: metadata.indexable ? 'index,follow' : 'noindex,follow',
    canonical: new URL(canonicalPath, docsSiteUrl).href,
  }
}

export function applyDocsSeo(metadata: ReturnType<typeof getDocsSeo>) {
  document.title = metadata.title
  setMeta('description', metadata.description)
  setMeta('robots', metadata.robots)
  setMeta('og:title', metadata.title, 'property')
  setMeta('og:description', metadata.description, 'property')
  setMeta('og:url', metadata.canonical, 'property')
  setMeta('twitter:title', metadata.title)
  setMeta('twitter:description', metadata.description)

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.append(canonical)
  }
  canonical.href = metadata.canonical
}

function setMeta(key: string, content: string, attribute: 'name' | 'property' = 'name') {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, key)
    document.head.append(meta)
  }
  meta.content = content
}
