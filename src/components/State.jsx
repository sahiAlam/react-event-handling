import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  console.log("render");
  function handleCount() {
    setTimeout(() => {
      setCount(count + 1);
      // setCount((count) => count + 1);
    }, 2000);
    console.log(count);
  }

  return (
    <>
      <div id="state">
        <h2>State Management</h2>
        <h1>count: {count}</h1>
        <button onClick={handleCount}>Update</button>
      </div>
    </>
  );
};

export default State;
