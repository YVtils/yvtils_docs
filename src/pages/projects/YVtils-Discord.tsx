import React from 'react';

import { Heading, ThemeProvider, Text, Button, Spacer } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
                <Content />
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;