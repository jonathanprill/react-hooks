import React, { useState } from "react";

function Counter() {

  const [counter, setCounter] = useState(0);


  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      {counter}
      <button onClick={increaseCounter}>Increment</button>
    </div>
  );
}

export default Counter;
