// React imports
import { lazy } from 'react';
// Third party libraries imports
import { createBrowserRouter, RouteObject } from 'react-router-dom';
// FS imports
import App from 'src/App';


const HomePage = lazy(() => import('src/layout/Pages/HomePage'));
const GameDetailsPage = lazy(() => import('src/layout/Pages/GameDetailsPage'));
const ErrorPage = lazy(() => import('src/layout/Pages/ErrorPage'));


const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/games/:id',
                element: <GameDetailsPage />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;