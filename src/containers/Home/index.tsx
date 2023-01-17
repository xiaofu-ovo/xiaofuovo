import React, { useEffect } from 'react';
import img from '@/assets/1.png';
import './index.less';

import axios from 'axios';

export default function Home() {
  useEffect(() => {
    console.log('useEffect');
    axios.get(`/api/`);
  }, []);
  return (
    <div className="home">
      你吃饱了吗？
      <img src={img} style={{ width: '100px', height: '100px' }} />
    </div>
  );
}
