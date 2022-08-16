import React, { useRef } from "react";

function UseRefHook1() {

    const inputRef = useRef(null);

    const onClickFunction = () => {
        console.log(inputRef.current.value)
        inputRef.current.focus();
        inputRef.current.value = '';
    }

  return (
    <div>
        <h1>Name</h1>
        <input type='text' ref={inputRef}/>
        <button onClick={onClickFunction}>Change Name</button>
    </div>
  );
}

export default UseRefHook1;
 