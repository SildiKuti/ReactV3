// Create a Counter class component with an internal state containing a count property, initialized to 0. 
// The Counter component should render the count property within an h1 tag,
//  and the count property should be incremented by 1 every second;

import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h1>{count}</h1>;
};

export default Counter;

