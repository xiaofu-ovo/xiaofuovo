import React from 'react';
import './index.less';

interface TitleMap {
  title: string;
  href?: string;
  component?: JSX.Element;
}

const titleMap: TitleMap[] = [
  {
    title: '关于',
    href: '/about',
  },
  {
    title: '登录',
    href: '/login',
  },
];

export default function Header() {
  return (
    <div className="header">
      <div
        key="myIcon"
        className="myIcon"
        onClick={() => {
          location.href = '/';
        }}>
        <div className="pre">小浮</div>
        <div className="next">ovo</div>
      </div>

      <div className="right">
        {titleMap.map(ele => {
          const { title, component, href } = ele;
          if (ele.component) {
            return component;
          } else if (ele.title) {
            return (
              <div
                className="title"
                key={title}
                onClick={() => (location.href = href)}>
                {title}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
