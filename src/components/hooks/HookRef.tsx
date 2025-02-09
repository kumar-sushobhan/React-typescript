import { useEffect, useRef, useState } from "react";

const HookRef = () => {
  const [value, setValue] = useState(0);
  //const [count, setCount] = useState(0);
  const count = useRef(0); // here, useRef is not re-rendering the component when count value is changing
  console.log(count);

  //   useEffect(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   });
  useEffect(() => {
    count.current++;
    console.log("Render count: ", count.current);
    //inputElement.current.style.background = "blue";
  });

  const inputElement = useRef("");
  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.style.background = "blue";
  };
  return (
    <>
      <button
        onClick={() => {
          setValue((previous) => previous - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((previous) => previous + 1);
        }}
      >
        +1
      </button>
      <h1>Render count: {count.current}</h1>
      <div>
        <input type="text" ref={inputElement} />
        <button onClick={btnClicked}>Click Here</button>
      </div>
    </>
  );
};

export default HookRef;

// useRef is a react hook that allow us to create mutable variables, which will not re-render the component
// useRef is also used for accessing DOM elements
