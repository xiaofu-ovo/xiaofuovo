import React from 'react';
import { Spin } from 'antd';
import Loadable from 'react-loadable';
import { RouterConfig } from './types';

const loadComponent = (component: () => any) =>
  Loadable({
    loader: component,
    loading: () => <Spin />,
  });

export const Home = loadComponent(
  () => import(/* webpackChunkName: "Home" */ './containers/Home'),
);

export const ErrorPage = loadComponent(
  () => import(/* webpackChunkName: "ErrorPage" */ './containers/ErrorPage'),
);

const routers: Array<RouterConfig> = [
  {
    title: 'homepage',
    path: '/',
    component: Home,
    children: [
      {
        title: 'errorpage',
        path: '/:id',
        component: ErrorPage,
      },
    ],
  },
];

export default routers;
