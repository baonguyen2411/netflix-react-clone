import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/HomePage')),
    exact: true,
    requiredAuthen: false,
  },
  {
    path: '/login',
    component: lazy(() => import('./pages/LoginPage')),
    exact: true,
    requiredAuthen: false,
  },
];

export default routes;
