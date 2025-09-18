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
            brand={<span>YVtils Web</span>}
            brandHref="/"
            navItems={[
                {
                    children: [
                        {
                            href: '/projects/yvtils-smp',
                            id: 'yvtils-smp',
                            label: 'YVtils SMP'
                        },
                        {
                            href: '/projects/yvtils-discord',
                            id: 'yvtils-discord',
                            label: 'YVtils Discord'
                        },
                        {
                            href: '/projects/yvtils-multiMine',
                            id: 'yvtils-multiMine',
                            label: 'YVtils MultiMine'
                        },
                        {
                            href: '/projects/yvtils-regions',
                            id: 'yvtils-regions',
                            label: 'YVtils Regions'
                        }
                    ],
                    icon: 'Folder',
                    id: 'projects',
                    label: 'Projects'
                },
                {
                    href: '/yvsmp',
                    icon: 'World',
                    id: 'yvsmp',
                    label: 'YV SMP'
                },
                {
                    href: createRedirectUrl(HelpRedirectURL),
                    icon: 'Question',
                    id: 'help',
                    label: 'Help'
                }
            ]}
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