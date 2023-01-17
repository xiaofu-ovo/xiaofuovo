import React from 'react';
import './index.less';

interface TitleMap {
  title: string;
  href?: string;
  component?: JSX.Element;
}

const titleMap: TitleMap[] = [
  {
    title: '小浮ovo',
    component: (
      <div
        key="myIcon"
        className="myIcon"
        onClick={() => {
          location.href = '/';
        }}>
        <div className="pre">小浮</div>
        <div className="next">ovo</div>
      </div>
    ),
  },
  // {
  //   title: '首页',
  // },
  // {
  //   title: '博客',
  // },
  // {
  //   title: '攻略',
  // },
  {
    title: '关于',
  },
  {
    title: '登录',
  },
];

export default function Header() {
  return (
    <div className="header">
      {titleMap.map(ele => {
        const { title, component, href } = ele;
        if (ele.component) {
          return component;
        } else if (ele.title) {
          return (
            <div className="title" key={title}>
              {title}
            </div>
          );
        }
      })}
    </div>
  );
}
