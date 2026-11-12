import { Header, IconButton, useTheme } from '@yvtils/designsystem-v2'
import { VersionSelector } from './VersionSelector'

export function SiteHeader() {
  const { themeMode, toggleTheme } = useTheme()
  const isDark = themeMode === 'dark'

  return (
    <Header>
      <Header.Left>
        <Header.Logo productName="Docs" />
      </Header.Left>
      <Header.Right>
        <VersionSelector />
        <IconButton
          type="button"
          label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          variant="ghost"
          tone="brand"
          size="lg"
          icon={{ name: isDark ? 'LightMode' : 'DarkMode', variant: 'fill', size: 16 }}
          onClick={toggleTheme}
        />
      </Header.Right>
    </Header>
  )
}
