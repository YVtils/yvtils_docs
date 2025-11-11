import React from 'react';

import { Navbar } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';

const HelpRedirectURL = 'https://discord.gg/FffswhyD3C';

// Helper function to create encoded redirect URLs
const createRedirectUrl = (targetUrl: string): string => {
    return `/redirect/${encodeURIComponent(targetUrl)}`;
};

const Header = () => {
    return (
        <Navbar
            brand={<span>YVtils Docs</span>}
            brandHref="/"
            navItems={[]}
            onMobileMenuToggle={() => { }}
            onBrandClick={() => { }}
            variant="default"
            showThemeSwitcher={true}
        />
    );
}

const App = () => {
    return (
        <Header />
    );
};

export default App;