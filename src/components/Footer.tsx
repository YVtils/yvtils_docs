import { useTranslation } from 'react-i18next';

import { Footer as FooterComponent } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';

const Footer = () => {
    const { t } = useTranslation('common');

    return (
        <FooterComponent
            companyName={t('footer.company')}
            copyrightYear={t('footer.copyright')}
            imprintText={t('footer.imprint')}
            onImprintClick={() => {
                window.location.href = 'https://yvtils.net/imprint';
            }}
            onPrivacyClick={() => {
                window.location.href = 'https://yvtils.net/privacy';
            }}
            privacyText={t('footer.privacy')}
            variant="default"
            additionalLinks={[
                { text: t('footer.license'), href: '', onClick: () => { window.location.href = 'https://yvtils.net/license'; } },
                { text: t('footer.brandGuidelines'), href: '', onClick: () => { window.location.href = 'https://yvtils.net/brand'; } },
            ]}
        />
    );
}

const App = () => {
    return (
        <Footer />
    );
};

export default App;