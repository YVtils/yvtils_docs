import React from 'react';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { Heading, ThemeProvider, Text, Button, Spacer } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';
import Header from '../components/Header';

const isExternalUrl = (url: string) => /^https?:\/\//i.test(url);

const Content = () => {
    const { t } = useTranslation('errors');
    const location = useLocation();

    // Extract the path after /redirect/
    const fullPath = location.pathname;
    const redirectPath = fullPath.replace('/redirect/', '');

    let to = redirectPath;
    if (!to) {
        to = '/404';
    } else {
        to = decodeURIComponent(to);
    }

    React.useEffect(() => {
        if (isExternalUrl(to!)) {
            window.location.href = to!;
        } else {
            window.location.pathname = to!;
        }
    }, [to]);

    const handleRedirect = () => {
        if (isExternalUrl(to!)) {
            window.location.href = to!;
        } else {
            window.location.pathname = to!;
        }
    };

    return (
        <div className="content">
            <Heading size='3xl'>{t('redirect.title')}</Heading>
            <Spacer size='sm' />
            <Text size='xl'>{t('redirect.description')}</Text>
            <Spacer size='sm' />
            <Text size='xl'>{t('redirect.manual')}</Text>
            <Spacer size='md' />

            <Button
                icon='ExternalLink'
                iconPosition="left"
                onClick={handleRedirect}
                size="lg"
                variant="primary"
            >
                {t('redirect.button')}
            </Button>
        </div>
    );
}

const App = () => {
    return (
        <ThemeProvider>
            <div className="app">
                <Header />
                <Content />
            </div>
        </ThemeProvider>
    );
};

export default App;