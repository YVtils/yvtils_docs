import { Sidebar, Text } from '@yvtils/designsystem-v2'
import type { SidebarItem } from '@yvtils/designsystem-v2'
import { colorPages, statusPages } from './docsRoutes'
import { moduleGuides, pagesForModule } from '../../pages/collection/modules'
import { versionedHref } from './docsVersions'

export function DocsSidebar({ activeItemId }: { activeItemId?: string }) {
  const navigation: SidebarItem[] = [
    { id: 'introduction', label: 'Introduction', icon: 'BookOpen', href: versionedHref('/') },
    {
      id: 'status',
      label: 'Status Module',
      icon: 'Layers',
      children: statusPages.map((page) => ({ ...page, href: versionedHref(page.href), id: `status-${page.id}` })),
    },
    ...moduleGuides.map((module): SidebarItem => ({
      id: `module-${module.slug}`,
      label: `${module.name} Module`,
      icon: 'Layers',
      children: pagesForModule(module).map((page) => ({ ...page, href: versionedHref(page.href), id: `module-${module.slug}-${page.id}` })),
    })),
    {
      id: 'utils',
      label: 'Utilities',
      icon: 'Adjustments',
      children: [
        {
          id: 'color-codes',
          label: 'Color codes',
          children: colorPages.map((page) => ({ ...page, href: versionedHref(page.href), id: `color-${page.id}` })),
        },
      ],
    },
  ]

  return (
    <Sidebar
      items={navigation}
      activeItemId={activeItemId}
      navigationLabel="Collection documentation"
      mobileToggleLabel="Open documentation navigation"
      header={<Text as="span" weight="semibold">YVtils Collection</Text>}
    />
  )
}
