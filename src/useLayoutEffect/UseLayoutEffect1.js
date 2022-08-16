import React, { useLayoutEffect, useEffect } from "react";

function UseLayoutEffect1() {

// uselayourEffect is called before useEffect
//useLayoutEffect will print to screen before useEffect
//maybe can be used for loading wheels when APIS are loading



    useEffect(() => {
        console.log('useEffect')
    }, []);

    useLayoutEffect(() => {
        console.log('layout')
    }, []);

  return (
    <div>
        <h1>Name</h1>
    
    </div>
  );
}

export default UseLayoutEffect1;
 