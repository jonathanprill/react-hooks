import React, { useState } from "react";

function InputValue() {

  const [inputValue, setInputValue] = useState("default");

  const changeText = (event) => {
    const newText = event.target.value;
    setInputValue(newText);
  }

  return (
    <div>
      <input placeholder="sdfds" onChange={changeText} />
      {inputValue}
    </div>
  );
}

export default InputValue;
