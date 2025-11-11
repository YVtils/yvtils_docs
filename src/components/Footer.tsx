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
                window.location.href = 'https://yvtils.net/imprint';
            }}
            onPrivacyClick={() => {
                window.location.href = 'https://yvtils.net/privacy';
            }}
            privacyText="Privacy Policy"
            variant="default"
            additionalLinks={[
                { text: 'License', href: '', onClick: () => { window.location.href = 'https://yvtils.net/license'; } },
                { text: 'Brand Guidelines', href: '', onClick: () => { window.location.href = 'https://yvtils.net/brand'; } },
            ]}
        />
    );
}

const App = () => {
    return (
        <Footer />
    );
};

export default App;