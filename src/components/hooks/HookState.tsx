import { useState } from "react";

const HookState = () => {
  const [color, setColor] = useState("Red");
  const [brand, setBrand] = useState("Ferrari");
  const [model, setModel] = useState("Roma");
  const [year, setYear] = useState("2023");
  const [carColor, setCarColor] = useState("Green");

  const [car, setCar] = useState({
    carColor: "Green",
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
  });

  const changeColor = () => {
    setColor((previousColor) => {
      return previousColor === "Red" ? "Blue" : "Red";
    });
    console.log("Color changed to blue");
  };

  // to update an object use previous value
  const changeCar = () => {
    setCar((previousCar) => {
      return {
        ...previousCar,
        carColor: previousCar.carColor === "Green" ? "Blue" : "Green",
      };
    });
    console.log("Car color changed to blue");
  };

  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((previousCount) => previousCount + 1); //1
    setCount((previousCount) => previousCount + 1); //2
    setCount((previousCount) => previousCount + 1); //3
    setCount((previousCount) => previousCount + 1); //4
    setCount((previousCount) => previousCount + 1); //5
    console.log("Count increased to", count);
  };
  return (
    <>
      <div>
        <h1>My favourite color is {color}</h1>
        <button onClick={changeColor}>Change Color</button>
      </div>
      <div>
        <h1>My favorite brand is {car.brand}</h1>
        <h2>
          It is a {car.carColor} {car.model} from {car.year}
        </h2>
        <button onClick={changeCar}>Change Car Color</button>
      </div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increment</button>
    </>
  );
};

export default HookState;
