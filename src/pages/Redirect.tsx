import React from 'react';
import { useLocation } from "react-router-dom";

import { Heading, ThemeProvider, Text, Button, Spacer } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';
import Header from '../components/Header';

const isExternalUrl = (url: string) => /^https?:\/\//i.test(url);

const Content = () => {
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
            <Heading size='3xl'>Redirecting...</Heading>
            <Spacer size='sm' />
            <Text size='xl'>Please wait while we redirect you to the new page.</Text>
            <Spacer size='sm' />
            <Text size='xl'>If you are not redirected automatically, click the button below:</Text>
            <Spacer size='md' />

            <Button
                icon='ExternalLink'
                iconPosition="left"
                onClick={handleRedirect}
                size="lg"
                variant="primary"
            >
                Redirect
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