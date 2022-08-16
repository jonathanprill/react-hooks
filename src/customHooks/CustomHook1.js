import React from "react";
import UseCustomHook2 from "./useCustomHook1-2";
import useUpdateLogger from "./useUpdateLogger";

export default function CustomHook1() {

    //Need to use "use to create custom Hooks"

    const [name, setName] = UseCustomHook2('namess', '');
    useUpdateLogger(name)

    return (
        <input
        type='text'
        value={name}
        onChange={event => setName(event.target.value)}
        />
    )
}