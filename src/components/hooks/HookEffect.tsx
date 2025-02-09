// Fetching data from API
// Directly updating DOM
// Timers like setTimeout() and setInterval
import React, { useState } from "react";
import {useEffect, setTimeout } from React;

const HookEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=> setTimeout(()=> {
        setCount(count => count + 1);
    }, 2000));
    return (
        <>
            <h1>I have rendered {count} times</h1>
        </>
    )
}

export default HookEffect;