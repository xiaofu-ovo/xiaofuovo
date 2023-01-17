import Home from './containers/Home';
import ErrorPage from './containers/ErrorPage';

interface RouterConfig {
  title: string;
  path: string;
  component: () => JSX.Element;
  children?: Array<RouterConfig>;
}

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

export { Home, ErrorPage, routers, RouterConfig };
