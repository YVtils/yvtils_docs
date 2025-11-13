import React from 'react';

import { Heading, ThemeProvider, Text, Button, Spacer } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import { useTranslation } from 'react-i18next';

const Content = () => {
    const { t } = useTranslation('pages');

    return (
        <div className="content">
            <Heading size="xl" level="h1">
                {t('user.modules.list.title')}
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