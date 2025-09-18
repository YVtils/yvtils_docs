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
                    label: 'Dashboard',
                    onClick: () => { }
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
                        },
                        {
                            href: '/projects/templates',
                            id: '2-3',
                            label: 'Templates'
                        }
                    ],
                    icon: 'Folder',
                    id: '2',
                    label: 'YVtils SMP'
                }
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