import React, { useState } from 'react';

import { Sidebar as SidebarComponent } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';

// Helper function to create encoded redirect URLs
const createRedirectUrl = (targetUrl: string): string => {
    return `/redirect/${encodeURIComponent(targetUrl)}`;
};

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <SidebarComponent
            items={[
                {
                    icon: 'Home',
                    id: '1',
                    isActive: true,
                    label: 'Introduction',
                    href: '/',
                },
                {
                    children: [
                        {
                            href: '/projects/active',
                            id: '2-1',
                            label: 'Active Projects'
                        },
                        {
                            href: '/projects/archived',
                            id: '2-2',
                            label: 'Archived'
                        }
                    ],
                    icon: 'Folder',
                    id: '2',
                    label: 'User Setup'
                },
                {
                    children: [
                        {
                            href: '',
                            id: '3-1',
                            label: 'Getting Started'
                        },
                    ],
                    icon: 'BookOpen',
                    id: '3',
                    label: 'For Devs'
                },
                {
                    icon: 'Question',
                    id: '4',
                    label: 'FAQ',
                    href: '/faq'
                },
            ]}
            onToggleCollapse={() => setCollapsed(!collapsed)}
            collapsed={collapsed}
        />
    );
}

const App = () => {
    return (
        <Sidebar />
    );
};

export default App;