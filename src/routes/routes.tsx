// React imports
import { lazy } from 'react';
// Third party libraries imports
import { createBrowserRouter, RouteObject } from 'react-router-dom';
// FS imports
import App from 'src/App';


const HomePage = lazy(() => import('src/layout/Pages/homePage/HomePage'));
const GameDetails = lazy(() => import('src/layout/Pages/gameDetailsPage/main/components/GameDetailsPage'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/games/:id',
                element: <GameDetails />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;