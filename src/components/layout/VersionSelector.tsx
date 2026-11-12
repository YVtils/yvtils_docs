import { currentDocsVersion, docsVersions, resolveVersionedPath, versionedHref } from './docsVersions'

export function VersionSelector() {
  const location = resolveVersionedPath(window.location.pathname)

  return (
    <label className="version-selector">
      <span>Docs version</span>
      <select
        aria-label="Documentation version"
        value={location?.version ?? ''}
        onChange={(event) => {
          window.location.assign(versionedHref(
            `${location?.path ?? '/'}${window.location.search}${window.location.hash}`,
            event.target.value,
          ))
        }}
      >
        {!location && <option value="" disabled>Unknown version</option>}
        {docsVersions.map((version) => (
          <option key={version} value={version}>
            {version}{version === currentDocsVersion ? ' (latest)' : ''}
          </option>
        ))}
      </select>
    </label>
  )
}
