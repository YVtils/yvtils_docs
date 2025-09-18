import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

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
        path: "/yvsmp",
        Component: React.lazy(() => import('./pages/YVSMP'))
    },
    {
        path: "/projects/yvtils-smp",
        Component: React.lazy(() => import('./pages/projects/YVtils-SMP'))
    },
    {
        path: "/projects/yvtils-discord",
        Component: React.lazy(() => import('./pages/projects/YVtils-Discord'))
    },
    {
        path: "/projects/yvtils-multiMine",
        Component: React.lazy(() => import('./pages/projects/YVtils-MultiMine'))
    },
    {
        path: "/projects/yvtils-regions",
        Component: React.lazy(() => import('./pages/projects/YVtils-Regions'))
    },
    {
        path: "/redirect/*",
        Component: React.lazy(() => import('./pages/Redirect')),
    },
    {
        path: "/imprint",
        Component: React.lazy(() => import('./pages/Imprint')),
    },
    {
        path: "/privacy",
        Component: React.lazy(() => import('./pages/Privacy')),
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