import React from 'react';
import Loadable from 'react-loadable';
import { RouterConfig } from './types';

const loadComponent = (component: () => any) =>
  Loadable({
    loader: component,
    loading: () => <div />,
  });

export const Home = loadComponent(
  () => import(/* webpackChunkName: "Home" */ './containers/Home'),
);

export const ErrorPage = loadComponent(
  () => import(/* webpackChunkName: "ErrorPage" */ './containers/ErrorPage'),
);

const routers: Array<RouterConfig> = [
  {
    title: 'default',
    path: '/',
    component: Home,
  },
  {
    title: 'homepage',
    path: '/home',
    component: Home,
  },
];

export default routers;
