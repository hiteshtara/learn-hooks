import React, { useState, useRef, memo } from "react";

const Counter = memo(() => {
  const [counter, setCounter] = useState(0);
  const renders = useRef(0);

  return (
    <div>
      <div>Counter: {counter}</div>
      <div>Renders: {renders.current++}</div>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
    </div>
  );
});

export default Counter;
