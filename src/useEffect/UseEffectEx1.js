import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectEx1() {

    const [data, setData] = useState('');

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            setData(res.data[0].email)
            console.log('api was called')
        })
    },[]);


  return (
    <div>
        {data}
    </div>
  );
}

export default UseEffectEx1;
 