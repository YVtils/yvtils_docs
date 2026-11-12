import { useEffect, useState } from 'react'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { DocsSidebar } from './components/layout/DocsSidebar'
import { resolveDocsRoute } from './components/layout/docsRoutes'
import { resolveVersionedPath, versionedHref } from './components/layout/docsVersions'
import { HomePage } from './pages/home/HomePage'
import { StatusPage } from './pages/status/StatusPage'
import { ColorCodesPage } from './pages/utils/ColorCodesPage'
import { ModulePage } from './pages/collection/ModulePage'
import { Link, Stack, Text } from '@yvtils/designsystem-v2'
import './components/layout/DocsLayout.css'

function App() {
  const versionedPath = resolveVersionedPath(window.location.pathname)
  const path = versionedPath?.path ?? window.location.pathname
  const [hash, setHash] = useState(() => window.location.hash)
  const route = versionedPath ? resolveDocsRoute(path, hash) : undefined
  const routeId = route?.page.id
  const routeKind = route?.kind

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  useEffect(() => {
    if (routeKind) {
      document.querySelector('.content-scroll')?.scrollTo(0, 0)
    } else if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }
  }, [path, hash, routeId, routeKind])

  return (
    <>
      <SiteHeader />
      <Stack className="docs-layout">
        <DocsSidebar activeItemId={route ? route.kind === 'module' ? `module-${route.module.slug}-${route.page.id}` : `${route.kind}-${route.page.id}` : path === '/' ? 'introduction' : undefined} />
        <Stack className="content-scroll" role="region" aria-label="Page content" tabIndex={0}>
          {versionedPath && path === '/' ? <HomePage /> : route?.kind === 'status' ? (
            <StatusPage page={route.page.id} />
          ) : route?.kind === 'color' ? (
            <ColorCodesPage page={route.page.id} />
          ) : route?.kind === 'module' ? (
            <ModulePage module={route.module} page={route.page.id} />
          ) : (
            <Stack as="main" flexDirection="column" gap="lg" padding="xl" flex="1">
              <Stack as="h1"><Text as="span" variant="heading" size="2xl">Page not found</Text></Stack>
              <Link href={versionedHref('/')}>Return to the homepage</Link>
            </Stack>
          )}
        </Stack>
      </Stack>
      <SiteFooter />
    </>
  )
}

export default App
