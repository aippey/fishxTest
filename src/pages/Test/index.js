import React, { useState } from 'react';
import { Button } from '@whalecloud/fdx';


// import { getAsync } from '@/services/index';

const Test = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  // const requestFetch = () =>{
  //   const {}
  // }

  return (
    <div>

      <div>
        HOOK测试
        <h1>计数器</h1>
        {count}
        <Button onClick={add}>+</Button>
      </div>

      <div>
        网络请求测试（最简单版）
        {/* <button onClick={requestFetch}>请求网络</button> */}
      </div>

    </div>
  );
};

export default Test;
