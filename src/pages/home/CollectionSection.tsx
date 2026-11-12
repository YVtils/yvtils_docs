import { Card, Icon, Link, Stack, Tag, Text } from '@yvtils/designsystem-v2'

export function CollectionSection() {
  return (
    <Stack as="section" id="minecraft-plugins" className="section" flexDirection="column">
      <Stack className="section-heading" flexDirection="column" gap="sm">
        <Text as="span" size="sm" tone="brand" weight="semibold" className="eyebrow">
          START HERE
        </Text>
        <Stack as="h2">
          <Text as="span" variant="heading" size="2xl" weight="bold">
            Explore the collection
          </Text>
        </Stack>
        <Text as="p" size="lg" tone="secondary">
          Choose a guide below or use the sidebar to explore each module’s
          commands, settings and permissions.
        </Text>
      </Stack>

      <Card className="collection-card">
        <Tag label="BETA" tone="warning" variant="fill" />
        <Text as="p" tone="secondary">
          These guides describe an in-progress recode and may differ from released
          versions. The recode is a fresh deployment, not a migration of legacy data.
        </Text>
        <Link href="https://github.com/YVtils/yvtils_collection/" iconRight={{ name: 'ArrowRight', variant: 'outline' }}>
          View the collection source
        </Link>
        <Link href="https://modrinth.com/organization/yvtils" iconRight={{ name: 'ArrowRight', variant: 'outline' }}>
          YVtils on Modrinth
        </Link>
      </Card>

      <Stack className="feature-grid">
        <Card className="feature-card">
          <Icon name="Message" variant="outline" size="2xl" />
          <Stack as="h3">
            <Text as="span" variant="heading" size="xl" weight="semibold">            Players and gameplay</Text>
          </Stack>
          <Text as="p" tone="secondary">
            Give players waypoints, custom crafting, statuses and more.
          </Text>
        </Card>
        <Card className="feature-card">
          <Icon name="World" variant="outline" size="2xl" />
          <Stack as="h3">
            <Text as="span" variant="heading" size="xl" weight="semibold">            Server management</Text>
          </Stack>
          <Text as="p" tone="secondary">
            Protect builds, manage players and control server access.
          </Text>
        </Card>
        <Card className="feature-card">
          <Icon name="Discord" variant="outline" size="2xl" />
          <Stack as="h3">
            <Text as="span" variant="heading" size="xl" weight="semibold">            Connected community</Text>
          </Stack>
          <Text as="p" tone="secondary">
            Connect your server and Discord with account linking and chat sync.
          </Text>
        </Card>
      </Stack>
    </Stack>
  )
}
