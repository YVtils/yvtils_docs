import { Footer } from '@yvtils/designsystem-v2'

export function SiteFooter() {
  return (
    <Footer variant="minimal" copyrightText="YVtils" copyrightYear={{ from: 2023 }}>
      <Footer.Navigation>
        <Footer.Link label="Imprint" href="https://yvtils.net/imprint" />
        <Footer.Link label="Privacy" href="https://yvtils.net/privacy" />
        <Footer.Link label="License" href="https://yvtils.net/license" />
      </Footer.Navigation>
    </Footer>
  )
}
