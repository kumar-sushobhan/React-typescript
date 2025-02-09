// Fetching data from API
// Directly updating DOM
// Timers like setTimeout() and setInterval
import React, { useState, useEffect } from "react";

const HookEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sushobhan");

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, [count]);

  // Empty array dependecy ==> execution is only ONCE

  // Whenever, count changes, it will again execute the fucntion.
  // it will also execute the callback function first time and then again it will execute the callback function

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      setName((name) => Math.random() + name.toUpperCase());
    }, 2000);
  }, [count, name]);

  // here, Whenever name changes, it will execute the callback function
  return (
    <>
      <h1>I have rendered {count} times</h1>
      <h2>My name is {name}</h2>
    </>
  );
};

export default HookEffect;
