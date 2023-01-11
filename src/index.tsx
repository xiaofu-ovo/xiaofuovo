import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouterConfig } from './types';
import routers, { ErrorPage } from './route';
import Footer from './components/Footer';
import './styles/global.less';

const getAllRouter = (routers: Array<RouterConfig>, prePath = '') => {
  let allRouter: any[] = [];
  if (!routers?.length) {
    return [];
  }
  routers.forEach(routerConf => {
    const { path, component: Component, children } = routerConf;
    const realPath = `${prePath}${path}`;
    const curRoute = (
      <Route key={realPath} path={realPath} element={<Component />} />
    );

    // 404页面
    const notFoundRoute = (
      <Route
        key={`${prePath}/*`}
        path={`${prePath}/*`}
        element={<ErrorPage />}
      />
    );

    allRouter = [
      ...allRouter,
      ...getAllRouter(children, realPath), // 如果存在子路由，需要在当前路由之前，否则无法匹配
      curRoute,
      notFoundRoute, // 如果是找不到的页面，就显示404
    ];
  });
  return allRouter;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>{getAllRouter(routers)}</Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <>
    <App />
    <Footer />
  </>,
);
