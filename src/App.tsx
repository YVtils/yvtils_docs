import React from 'react';

import { Heading, ThemeProvider, Text } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const Content = () => {
    return (
        <div className="content">

        </div>
    );
}

const App = () => {
    return (
        <ThemeProvider>
            <div className="app">
                <Header />
                <Sidebar/>
                <Content />
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
