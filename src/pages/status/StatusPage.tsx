import { Card, CodeBlock, Link, Stack, Tag, Text } from '@yvtils/designsystem-v2'
import { PageNavigation } from '../../components/layout/PageNavigation'
import { PermissionList } from '../../components/layout/PermissionList'
import { statusPages } from '../../components/layout/docsRoutes'
import type { StatusPageId } from '../../components/layout/docsRoutes'

const source = 'https://github.com/YVtils/yvtils_collection/tree/51a7b7486a1f18fb3abb3814643b0a001bdadefe/status'

const permissions = [
  { name: 'yvtils.status.command', defaultAccess: 'Everyone', description: 'Use the status command.' },
  { name: 'yvtils.status.command.manage.self', defaultAccess: 'Everyone', description: 'Open your status management GUI.' },
  { name: 'yvtils.status.command.set', defaultAccess: 'Everyone', description: 'Set custom status text.' },
  { name: 'yvtils.status.command.default', defaultAccess: 'Everyone', description: 'Select a default status.' },
  { name: 'yvtils.status.command.clear', defaultAccess: 'Everyone', description: 'Clear your own status.' },
  { name: 'yvtils.status.command.manage.others', defaultAccess: 'Operators', description: 'Open another player’s status GUI.' },
  { name: 'yvtils.status.command.clear.others', defaultAccess: 'Operators', description: 'Clear another player’s status.' },
  { name: 'yvtils.status.config', defaultAccess: 'Operators', description: 'Edit module configuration.' },
  { name: 'yvtils.status.*', defaultAccess: 'Operators', description: 'Access all Status permissions.' },
]

const configExample = `display: "<dark_gray>[<white><status><dark_gray>] |<white> <playerName>"
maxLength: 20
defaultStatus:
  - "<green>Online"
  - "<yellow>Away"
  - "<red>Busy"
blacklist: []`

export function StatusPage({ page }: { page: StatusPageId }) {
  return (
      <Stack as="main" className="docs-content" flexDirection="column">
        {page === 'overview' && (
        <Stack as="section" id="overview" className="docs-section" flexDirection="column" gap="lg">
          <Tag label="Recode branch" tone="warning" variant="outline" />
          <Stack as="h1"><Text as="span" variant="heading" size="2xl" weight="bold">Status module</Text></Stack>
          <Text as="p" size="lg" tone="secondary">
            Give players a status prefix in chat, the player list, and scoreboard teams.
            Statuses are saved per player and restored when they reconnect.
          </Text>
          <Card className="docs-notice">
            <Text as="p" tone="secondary">
              This guide describes the in-progress recode branch, not necessarily a released version.
              Enable the status module and find its files under plugins/yvtils/status/.
            </Text>
            <Link href={source}>View the source used for this guide</Link>
          </Card>
          {/* TODO: Add a current screenshot of the Status management GUI. */}
          <Card className="screenshot-placeholder">
            <Text as="p" weight="semibold">Screenshot coming soon</Text>
            <Text as="p" tone="secondary">Status management GUI</Text>
          </Card>
        </Stack>
        )}

        {page === 'commands' && (
        <Stack as="section" id="commands" className="docs-section" flexDirection="column" gap="lg">
          <Tag label="Status module · Recode branch" tone="warning" variant="outline" />
          <Stack as="h1"><Text as="span" variant="heading" size="2xl" weight="bold">Commands</Text></Stack>
          <Text as="p" tone="secondary">
            Use /status to open your management GUI. /prefix and /role are aliases
            with the same permissions.
          </Text>
          <CodeBlock title="Status commands" language="text" code={'/status\n/status <player>\n/status set <status>\n/status default <status>\n/status clear [player]'} />
          <Text as="p" tone="secondary">
            Set custom text, select a configured default, or clear a status. Managing
            or clearing another player’s status requires additional permissions.
          </Text>
        </Stack>
        )}

        {page === 'configuration' && (
        <Stack as="section" id="configuration" className="docs-section" flexDirection="column" gap="lg">
          <Tag label="Status module · Recode branch" tone="warning" variant="outline" />
          <Stack as="h1"><Text as="span" variant="heading" size="2xl" weight="bold">Configuration</Text></Stack>
          <Text as="p" tone="secondary">
            The following values are the recode branch defaults for plugins/yvtils/status/config.yml.
          </Text>
          <CodeBlock title="status/config.yml" language="yaml" code={configExample} showLineNumbers />
          <Stack className="docs-list" flexDirection="column" gap="md">
            <Text as="p"><Text as="span" weight="semibold">display</Text> — Format using the {'<status>'} and {'<playerName>'} placeholders.</Text>
            <Text as="p"><Text as="span" weight="semibold">maxLength</Text> — Maximum custom status length after formatting is stripped.</Text>
            <Text as="p"><Text as="span" weight="semibold">defaultStatus</Text> — Statuses available through /status default.</Text>
            <Text as="p"><Text as="span" weight="semibold">blacklist</Text> — Exact status strings that cannot be used.</Text>
          </Stack>
          <Text as="p" tone="secondary">
            The file also includes a documentation URL. Formatting uses MiniMessage tags.
          </Text>
        </Stack>
        )}

        {page === 'permissions' && (
        <Stack as="section" id="permissions" className="docs-section" flexDirection="column" gap="lg">
          <Tag label="Status module · Recode branch" tone="warning" variant="outline" />
          <Stack as="h1"><Text as="span" variant="heading" size="2xl" weight="bold">Permissions</Text></Stack>
          <Text as="p" tone="secondary">
            GUI actions also require their corresponding action permission. Clearing
            another player’s status through the GUI also requires clear.others.
          </Text>
          <PermissionList permissions={permissions} />
        </Stack>
        )}
        <PageNavigation pages={statusPages} currentId={page} />
    </Stack>
  )
}
