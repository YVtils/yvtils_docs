import { useTranslation } from 'react-i18next';

import { Heading, ThemeProvider } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const Content = () => {
    const { t } = useTranslation('pages');

    return (
        <div className="content">
            <Heading size="xl" level="h1">
                {t('home.title')}
            </Heading>
            <Heading size="lg" level="h2">
                {t('home.subtitle')}
            </Heading>

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
