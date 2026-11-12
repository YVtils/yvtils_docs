export const statusPages = [
  { id: 'overview', label: 'Overview', href: '/docs/collection/status' },
  { id: 'commands', label: 'Commands', href: '/docs/collection/status/commands' },
  { id: 'configuration', label: 'Configuration', href: '/docs/collection/status/configuration' },
  { id: 'permissions', label: 'Permissions', href: '/docs/collection/status/permissions' },
] as const

export const colorPages = [
  { id: 'overview', label: 'Overview', href: '/docs/utils/color-codes' },
  { id: 'tags', label: 'Writing tags', href: '/docs/utils/color-codes/tags' },
  { id: 'colors', label: 'Minecraft colors', href: '/docs/utils/color-codes/colors' },
  { id: 'decorations', label: 'Decorations & components', href: '/docs/utils/color-codes/decorations' },
  { id: 'preview', label: 'Preview', href: '/docs/utils/color-codes/preview' },
] as const

export type StatusPageId = typeof statusPages[number]['id']
export type ColorPageId = typeof colorPages[number]['id']

export function resolveDocsRoute(path: string, hash: string) {
  const section = hash.slice(1)
  if (path === '/status/config.yml') {
    const page = statusPages.find((item) => item.id === section)
    return { kind: 'status' as const, page: page ?? statusPages[2] }
  }
  if (path === statusPages[0].href && section) {
    const page = statusPages.find((item) => item.id === section)
    if (page) return { kind: 'status' as const, page }
  }
  const status = statusPages.find((item) => item.href === path)
  if (status) return { kind: 'status' as const, page: status }
  const color = colorPages.find((item) => item.href === path)
  if (color) return { kind: 'color' as const, page: color }
  for (const module of moduleGuides) {
    const page = pagesForModule(module).find((item) => item.href === path)
    if (page) return { kind: 'module' as const, module, page }
  }
  return undefined
}
import { moduleGuides, pagesForModule } from '../../pages/collection/modules.ts'
