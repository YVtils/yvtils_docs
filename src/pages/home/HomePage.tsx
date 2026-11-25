import { Stack } from '@yvtils/designsystem-v2'
import { CollectionSection } from './CollectionSection'
import { HeroSection } from './HeroSection'
import './HomePage.css'

export function HomePage() {
  return (
    <Stack as="main" className="page" flexDirection="column">
      <HeroSection />
      <CollectionSection />
    </Stack>
  )
}
