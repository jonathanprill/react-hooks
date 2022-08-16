import React, { useLayoutEffect, useEffect, useRef } from "react";

function UseLayoutEffect2() {

    const inputRef = useRef(null)

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
       inputRef.current.value = "Hello";
    }, []);

  return (
    <div>
        <input ref={inputRef} value="my asdasdasdasdname" style={{width: '400px', height: '100px'}}/>
    
    </div>
  );
}

export default UseLayoutEffect2;
 