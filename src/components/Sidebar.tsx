import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Sidebar as SidebarComponent } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    // Helper function to check if a path matches the current location
    const isPathActive = (href?: string): boolean => {
        if (!href) return false;
        return location.pathname === href;
    };

    // Helper function to check if any child is active
    const hasActiveChild = (children?: Array<{ href?: string; children?: any[] }>): boolean => {
        if (!children) return false;
        return children.some(child => {
            if (isPathActive(child.href)) return true;
            if (child.children) return hasActiveChild(child.children);
            return false;
        });
    };

    return (
        <SidebarComponent
            items={[
                {
                    icon: 'Home',
                    id: '1',
                    isActive: isPathActive('/'),
                    label: 'Introduction',
                    href: '/',
                },
                {
                    children: [
                        {
                            href: '/modules/list',
                            id: '2-1',
                            label: 'Available Modules',
                            isActive: isPathActive('/modules/list'),
                        },
                        {
                            href: '/modules/archived',
                            id: '2-2',
                            label: '...',
                            isActive: isPathActive('/modules/archived'),
                        }
                    ],
                    icon: 'Folder',
                    id: '2',
                    label: 'User Setup',
                    isActive: hasActiveChild([
                        { href: '/modules/list' },
                        { href: '/modules/archived' }
                    ]),
                },
                {
                    children: [
                        {
                            href: '/dev/setup',
                            id: '3-1',
                            label: 'Setting up your development environment',
                            isActive: isPathActive('/dev/setup'),
                        },
                        {
                            href: '/dev/build',
                            id: '3-2',
                            label: 'Build the plugins yourself',
                            isActive: isPathActive('/dev/build'),
                        },
                        {
                            children: [
                                {
                                    href: '/dev/fusion/introduction',
                                    id: '3-3-1',
                                    label: 'Introduction to Fusion Module',
                                    isActive: isPathActive('/dev/fusion/introduction'),
                                }
                            ],
                            id: '3-3',
                            label: 'Fusion Module',
                            isActive: hasActiveChild([
                                { href: '/dev/fusion/introduction' }
                            ]),
                        },
                    ],
                    icon: 'BookOpen',
                    id: '3',
                    label: 'For Devs',
                    isActive: hasActiveChild([
                        { href: '/dev/setup' },
                        { href: '/dev/build' },
                        { href: '/dev/fusion/introduction' }
                    ]),
                },
                {
                    icon: 'Question',
                    id: '4',
                    label: 'FAQ',
                    href: '/faq',
                    isActive: isPathActive('/faq'),
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