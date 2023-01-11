import React from 'react';
import './index.less';
import img from '../../assets/favicon.png';

export default function Footer() {
  return (
    <div className="footer">
      <img src={img} />
      <a href="https://beian.miit.gov.cn/" target="_blank">
        鄂ICP备2023000359号-1
      </a>
      {` · `}© 2023 By XiaoFuovo
    </div>
  );
}
