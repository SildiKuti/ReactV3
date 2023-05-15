import React, { useState, useEffect } from 'react';
import CounterDisplay from './CounterDisplay';

const Counter = (prop) => {
    
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);


  return () => clearInterval(intervalId);
}, []);

return <CounterDisplay count={count} />;

};

export default Counter;

