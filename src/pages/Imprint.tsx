import React from 'react';

import { Heading, Text, ThemeProvider } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Imprint = () => {
    return (
        <div className="content">
            <div>
                <Heading size='2xl'>Legal Notice</Heading>

                <Heading size='lg'>Information in accordance with Section 5 TMG</Heading>
                <Text>
                    Simeon Weichert
                </Text>
                <Text>
                    Hechinger Straße 12
                </Text>
                <Text>
                    71229 Leonberg
                </Text>

                <Heading size='lg'>Contact</Heading>
                <Text>
                    Phone: +49 1590 6711604
                </Text>
                <Text>
                    Mail: contact@yvtils.net
                </Text>

                <Heading size='lg'>EU-Dispute-Settlement</Heading>
                <Text>
                    The Europäische Commission owns a platform for Online-Dispute-Settlement (OS): https://ec.europa.eu/consumers/odr/
                </Text>
                <Text>
                    Our E-Mail-Address can be found above in the imprint.
                </Text>
            </div>
        </div>
    );
}

const App = () => {
    return (
        <ThemeProvider>
            <div className="app">
                <Header />
                <Imprint />
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;