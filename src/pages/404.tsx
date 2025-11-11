import React from 'react';

import { Heading, ThemeProvider, Text, Button, Spacer } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Content = () => {
    return (
        <div className="content">
            
            <Heading size='3xl'>404 - Page not found</Heading>
            <Spacer
                size='sm'
            />
            <Text size='xl'>Sorry, but the page you were trying to visit does not exist</Text>

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
                Home
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