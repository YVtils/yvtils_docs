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