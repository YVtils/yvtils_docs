import { Popover } from '@yvtils/designsystem-v2'
import { currentDocsVersion, docsVersions, resolveVersionedPath, versionedHref } from './docsVersions'

export function VersionSelector() {
  const location = resolveVersionedPath(window.location.pathname)

  return (
    <Popover openDirection="bottom-right">
      <Popover.Trigger
        aria-label={`Documentation version: ${location?.version ?? 'Unknown version'}`}
        variant="outline"
        tone="brand"
      >
        {location?.version ?? 'Unknown version'}
      </Popover.Trigger>
      <Popover.Content>
        {docsVersions.map((version) => (
          <Popover.Link
            key={version}
            href={versionedHref(
              `${location?.path ?? '/'}${window.location.search}${window.location.hash}`,
              version,
            )}
            aria-current={location?.version === version ? 'true' : undefined}
          >
            {version}{version === currentDocsVersion ? ' (latest)' : ''}
          </Popover.Link>
        ))}
      </Popover.Content>
    </Popover>
  )
}
