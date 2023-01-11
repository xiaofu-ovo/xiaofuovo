import Loadable from 'react-loadable';

export interface RouterConfig {
  title: string;
  path: string;
  component: any;
  children?: Array<RouterConfig>;
}
