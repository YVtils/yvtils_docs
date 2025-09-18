import React from 'react';

import { Footer as FooterComponent } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';

// Helper function to create encoded redirect URLs
const createRedirectUrl = (targetUrl: string): string => {
    return `/redirect/${encodeURIComponent(targetUrl)}`;
};

const Footer = () => {
    return (
        <FooterComponent
            companyName="YVtils"
            copyrightYear={"2023 - 2025"}
            imprintText="Imprint"
            onImprintClick={() => {
                window.location.href = '/imprint';
            }}
            onPrivacyClick={() => {
                window.location.href = '/privacy';
            }}
            privacyText="Privacy Policy"
            variant="default"
        />
    );
}

const App = () => {
    return (
        <Footer />
    );
};

export default App;