import React, { useReducer } from "react";

const reducer = (groupChange, action) => {
    switch (action.type) {
        case "Increment":
            return {count: groupChange.count + 1, showtext: groupChange.showText}
        case "toggleShowText": 
            return {count: groupChange.count, showText: !groupChange.showText}
        default:
            return groupChange;
    }
}


function ReduceText() {

    const [groupChange, dispatch] = useReducer(reducer, {count: 0, showText: true});

    return (
        <div style={{backgroundColor: "grey", width: "100vw", height: "100vh"}}>
            <h1 style={{margin: "0"}}>{groupChange.count}</h1>
            <button
                onClick={() => {
                    dispatch({type: 'Increment'})
                    dispatch({type: 'toggleShowText'})
                }}
            >
                Click Here
            </button>
            {groupChange.showText && <h2>This is a text</h2>}
        </div>
    );
}

export default ReduceText;
