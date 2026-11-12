import { Card, CodeBlock, Link, Stack, Tag, Text } from '@yvtils/designsystem-v2'
import { PageNavigation } from '../../components/layout/PageNavigation'
import { PermissionList } from '../../components/layout/PermissionList'
import { YouTubeVideo } from '../../components/YouTubeVideo'
import { pagesForModule } from './modules'
import type { ModuleGuide, ModuleSectionId } from './modules'

const sourceRoot = 'https://github.com/YVtils/yvtils_collection/tree/51a7b7486a1f18fb3abb3814643b0a001bdadefe'

export function ModulePage({ module, page }: { module: ModuleGuide; page: ModuleSectionId }) {
  const section = module.sections.find((item) => item.id === page)
  if (!section) throw new Error(`Unknown ${module.name} page: ${page}`)
  const pages = pagesForModule(module)
  const title = pages.find((item) => item.id === page)?.label

  return (
    <Stack as="main" className="docs-content" flexDirection="column">
      <Stack as="section" id={page} className="docs-section" flexDirection="column" gap="lg">
        <Tag label={page === 'overview' ? 'Recode branch' : `${module.name} module · Recode branch`} tone="warning" variant="outline" />
        <Stack as="h1">
          <Text as="span" variant="heading" size="2xl" weight="bold">
            {page === 'overview' ? `${module.name} module` : title}
          </Text>
        </Stack>
        <Text as="p" size={page === 'overview' ? 'lg' : undefined} tone="secondary">{section.paragraphs[0]}</Text>
        {section.code && <CodeBlock title={`${module.name} commands`} language="text" code={section.code} />}
        {section.settings && (
          <Stack className="docs-list" flexDirection="column" gap="md">
            {section.settings.map((setting) => (
              <Text as="p" key={setting.name}>
                <Text as="span" weight="semibold">{setting.name}</Text> — {setting.description}
              </Text>
            ))}
          </Stack>
        )}
        {section.paragraphs.slice(1).map((paragraph) => <Text key={paragraph} as="p" tone="secondary">{paragraph}</Text>)}
        {section.permissions && <PermissionList permissions={section.permissions} />}
        {page === 'overview' ? (
          <Card className="docs-notice">
            <Text as="p" tone="secondary">This guide describes the in-progress recode branch, not necessarily a released version.</Text>
            <Link href={`${sourceRoot}/${module.source}`}>View the source used for this guide</Link>
          </Card>
        ) : (
          <Link href={`${sourceRoot}/${module.source}`}>View the source used for this guide</Link>
        )}
        {section.image && (
          <Card className="screenshot-placeholder">
            <Text as="p" weight="semibold">Screenshot coming soon</Text>
            <Text as="p" tone="secondary">{section.image}</Text>
          </Card>
        )}
        {module.slug === 'discord' && page === 'overview' && (
          <YouTubeVideo videoId="YQiYSjEcdMk" title="Discord module setup guide" />
        )}
      </Stack>
      <PageNavigation pages={pages} currentId={page} />
    </Stack>
  )
}
