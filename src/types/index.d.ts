import Loadable from 'react-loadable';

export interface RouterConfig {
  title: string;
  path: string;
  component: any | (React.ComponentType<unknown> & Loadable.LoadableComponent);
  children?: Array<RouterConfig>;
}
