import React from 'react';

import { ThemeProvider } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComingSoon from '../components/ComingSoon';

const Content = () => {
    return (
        <div className="content">
            <ComingSoon
                title="Coming soon"
                icon="YVtils"
                primaryCta={{ label: 'Back to Home', href: '/', icon: 'Home' }}
            />
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
