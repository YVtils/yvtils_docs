import { useTranslation } from 'react-i18next';

import { Navbar } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';
import i18n from '../i18n/config';

const Header = () => {
    const { t } = useTranslation('common');

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Navbar
            brand={<span>{t('brand')}</span>}
            brandHref="/"
            navItems={[]}
            onMobileMenuToggle={() => { }}
            onBrandClick={() => { }}
            variant="default"
            showThemeSwitcher={true}
            languageSwitcher={{
                currentLanguage: i18n.language,
                languages: [
                    {
                        code: 'en',
                        label: 'English',
                        onSelect: () => { changeLanguage('en'); }
                    },
                    {
                        code: 'de',
                        label: 'Deutsch',
                        onSelect: () => { changeLanguage('de'); }
                    },
                ]
            }}
        />
    );
}

const App = () => {
    return (
        <Header />
    );
};

export default App;