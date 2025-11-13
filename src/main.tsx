import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './i18n/config'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/user/modules/list",
        Component: React.lazy(() => import('./pages/user/modules/list')),
    },
    {
        path: "/user/modules/archived",
        Component: React.lazy(() => import('./pages/Placeholder')),
    },
    {
        path: "/dev/setup",
        Component: React.lazy(() => import('./pages/Placeholder')),
    },
    {
        path: "/dev/build",
        Component: React.lazy(() => import('./pages/Placeholder')),
    },
    {
        path: "/dev/fusion/introduction",
        Component: React.lazy(() => import('./pages/Placeholder')),
    },
    {
        path: "/faq",
        Component: React.lazy(() => import('./pages/Placeholder')),
    },
    {
        path: "/redirect/*",
        Component: React.lazy(() => import('./pages/Redirect')),
    },
    {
        path: "/*",
        Component: React.lazy(() => import('./pages/404')),
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);