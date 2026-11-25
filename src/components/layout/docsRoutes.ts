import { moduleGuides, pagesForModule } from '../../pages/collection/modules.ts'

export const colorPages = [
  { id: 'overview', label: 'Overview', href: '/docs/utils/color-codes' },
  { id: 'tags', label: 'Writing tags', href: '/docs/utils/color-codes/tags' },
  { id: 'colors', label: 'Minecraft colors', href: '/docs/utils/color-codes/colors' },
  { id: 'decorations', label: 'Decorations & components', href: '/docs/utils/color-codes/decorations' },
  { id: 'preview', label: 'Preview', href: '/docs/utils/color-codes/preview' },
] as const

export type ColorPageId = typeof colorPages[number]['id']

export function resolveDocsRoute(path: string, hash: string) {
  const section = hash.slice(1)
  const statusModule = moduleGuides.find((module) => module.slug === 'status')
  if (path === '/status/config.yml' && statusModule) {
    const pages = pagesForModule(statusModule)
    const page = pages.find((item) => item.id === section) ?? pages.find((item) => item.id === 'configuration')
    if (page) return { kind: 'module' as const, module: statusModule, page }
  }
  if (statusModule && path === pagesForModule(statusModule)[0].href && section) {
    const page = pagesForModule(statusModule).find((item) => item.id === section)
    if (page) return { kind: 'module' as const, module: statusModule, page }
  }
  const color = colorPages.find((item) => item.href === path)
  if (color) return { kind: 'color' as const, page: color }
  for (const module of moduleGuides) {
    const page = pagesForModule(module).find((item) => item.href === path)
    if (page) return { kind: 'module' as const, module, page }
  }
  return undefined
}
