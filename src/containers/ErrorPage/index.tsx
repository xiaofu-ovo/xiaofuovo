import React from 'react';
import four from '@/assets/4.svg';
import zero from '@/assets/0.svg';
import wx from '@/assets/wx.png';
import './index.less';

import { Modal } from '@arco-design/web-react';

export default function ErrorPage() {

  const handleConcat = () => {

    const width = document.documentElement.clientWidth

    Modal.info({
      title: '联系我',
      footer: null,
      content: <div className='contact-modal'>
        <img src={wx} className='qrcode' />
        <div>WeChat: xiaofu_ovo</div>
        <div>Email: 576175630@qq.com</div>
      </div>,
      style: {
        maxWidth: Math.min(width - 48, 350)
      }
    })
    // alert('还没做噢')
  }

  return (
    <div className="error">
      <div className='img-wrapper'>
        <img src={four} />
        <img src={zero} />
        <img src={four} />
      </div>
      <div className='text'>
        抱歉，这个页面不见了！
        <br />
        如果您有任何疑问, 可以<i className='click' onClick={handleConcat}>点击这里</i>联系我～
      </div>
      <div className='text'>
        Sorry, this page does not exist!
        <br />
        if you have any questions, you can
        <i className='click' onClick={handleConcat}>click here</i> to contact me~
      </div>
    </div>
  );
}
