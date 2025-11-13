import { useTranslation } from 'react-i18next';

import { Heading, ThemeProvider, Text, Button, Spacer } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Content = () => {
    const { t } = useTranslation('errors');

    return (
        <div className="content">

            <Heading size='3xl'>{t('404.title')}</Heading>
            <Spacer
                size='sm'
            />
            <Text size='xl'>{t('404.description')}</Text>

            <Spacer
                size='md'
            />

            <Button
                icon='Home'
                iconPosition="left"
                onClick={() => {
                    window.location.href = '/';
                }}
                size="lg"
                variant="primary"

            >
                {t('404.button')}
            </Button>
        </div>
    );
}

const App = () => {
    return (
        <ThemeProvider>
            <div className="app">
                <Header />
                <div className="main_layout">
                    <Sidebar />
                    <Content />
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;