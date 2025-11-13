import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Sidebar as SidebarComponent } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';

const SIDEBAR_COLLAPSED_KEY = 'sidebar-collapsed';

const Sidebar = () => {
    const { t } = useTranslation('navigation');
    // Initialize collapsed state from localStorage
    const [collapsed, setCollapsed] = useState(() => {
        const saved = localStorage.getItem(SIDEBAR_COLLAPSED_KEY);
        return saved ? JSON.parse(saved) : false;
    });
    const location = useLocation();

    // Save collapsed state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem(SIDEBAR_COLLAPSED_KEY, JSON.stringify(collapsed));
    }, [collapsed]);

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
                    label: t('sidebar.home.label'),
                    href: '/',
                },
                {
                    children: [
                        {
                            href: '/user/modules/list',
                            id: '2-1',
                            label: t('sidebar.userSetup.availableModules'),
                            isActive: isPathActive('/user/modules/list'),
                        },
                    ],
                    icon: 'Folder',
                    id: '2',
                    label: t('sidebar.userSetup.label'),
                    isActive: hasActiveChild([
                        { href: '/user/modules/list' },
                    ]),
                },
                {
                    children: [
                        {
                            href: '/dev/setup',
                            id: '3-1',
                            label: t('sidebar.forDevs.setup'),
                            isActive: isPathActive('/dev/setup'),
                        },
                        {
                            href: '/dev/build',
                            id: '3-2',
                            label: t('sidebar.forDevs.build'),
                            isActive: isPathActive('/dev/build'),
                        },
                        {
                            children: [
                                {
                                    href: '/dev/fusion/introduction',
                                    id: '3-3-1',
                                    label: t('sidebar.forDevs.fusion.introduction'),
                                    isActive: isPathActive('/dev/fusion/introduction'),
                                }
                            ],
                            id: '3-3',
                            label: t('sidebar.forDevs.fusion.label'),
                            isActive: hasActiveChild([
                                { href: '/dev/fusion/introduction' }
                            ]),
                        },
                    ],
                    icon: 'BookOpen',
                    id: '3',
                    label: t('sidebar.forDevs.label'),
                    isActive: hasActiveChild([
                        { href: '/dev/setup' },
                        { href: '/dev/build' },
                        { href: '/dev/fusion/introduction' }
                    ]),
                },
                {
                    icon: 'Question',
                    id: '4',
                    label: t('sidebar.faq.label'),
                    href: '/faq',
                    isActive: isPathActive('/faq'),
                },
            ]}
            onToggleCollapse={() => setCollapsed(!collapsed)}
            collapsed={collapsed}
            showToggle={false}
            autoExpandActiveParents
            variant='floating'
        />
    );
}

const App = () => {
    return (
        <Sidebar />
    );
};

export default App;