import React from 'react';
import loginIcon from '@/assets/login.svg';
import aboutIcon from '@/assets/about.svg';
import './index.less';

interface TitleMap {
  title: JSX.Element | string;
  href?: string;
  component?: JSX.Element;
  icon?: any;
  iconSize?: number;
}

const titleMap: TitleMap[] = [
  {
    title: '关于',
    icon: aboutIcon,
    iconSize: 20,
    href: '/about',
  },
  {
    title: '登录',
    icon: loginIcon,
    iconSize: 16,
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
        {titleMap.map((ele, index) => {
          const { title, component, href, icon, iconSize } = ele;
          if (ele.component) {
            return component;
          } else if (ele.title) {
            return (
              <div
                className="title"
                key={index}
                onClick={() => (location.href = href)}>
                {icon && (
                  <img
                    src={icon}
                    className="icon"
                    style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
                  />
                )}
                {title}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
