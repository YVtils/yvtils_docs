import { Stack, Tag, Text } from '@yvtils/designsystem-v2'

export type PermissionEntry = {
  name: string
  description: string
  defaultAccess?: string
}

export function PermissionList({ permissions }: { permissions: readonly PermissionEntry[] }) {
  return (
    <Stack className="permission-list" flexDirection="column">
      {permissions.map(({ name, defaultAccess, description }) => (
        <Stack key={name} className="permission-row" flexDirection="column" gap="sm">
          <Stack className="permission-heading" alignItems="center" flexWrap="wrap" gap="sm">
            <Text as="span" weight="semibold" className="permission-name">{name}</Text>
            {defaultAccess && <Tag label={defaultAccess} size="sm" tone="subtle" />}
          </Stack>
          <Text as="p" tone="secondary">{description}</Text>
        </Stack>
      ))}
    </Stack>
  )
}
