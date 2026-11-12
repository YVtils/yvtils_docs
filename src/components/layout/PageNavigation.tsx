import { Divider, Link, Stack, Text } from '@yvtils/designsystem-v2'
import { versionedHref } from './docsVersions'

type Page = { id: string; label: string; href: string }

export function PageNavigation({ pages, currentId }: { pages: readonly Page[]; currentId: string }) {
  const index = pages.findIndex((page) => page.id === currentId)
  if (index < 0) throw new Error(`Unknown documentation page: ${currentId}`)
  const previous = pages[index - 1]
  const next = pages[index + 1]

  return (
    <Stack as="nav" aria-label="Page navigation" className="page-navigation" flexDirection="column" gap="lg">
      <Divider />
      <Stack className="page-navigation-links" flexWrap="wrap" gap="lg">
        {previous && (
          <Stack flexDirection="column" gap="sm" alignItems="flex-start">
            <Text as="span" size="sm" tone="secondary">Previous</Text>
            <Link href={versionedHref(previous.href)} iconLeft={{ name: 'ArrowLeft', variant: 'outline' }}>{previous.label}</Link>
          </Stack>
        )}
        {next && (
          <Stack className="page-navigation-next" flexDirection="column" gap="sm" alignItems="flex-start">
            <Text as="span" size="sm" tone="secondary">Next</Text>
            <Link href={versionedHref(next.href)} iconRight={{ name: 'ArrowRight', variant: 'outline' }}>{next.label}</Link>
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}
