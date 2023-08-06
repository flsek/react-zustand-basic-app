import React from "react";
import { useCounterStore } from "../store";

const Counter = () => {
  const { count, increment, decrement, reset, setNumber } = useCounterStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setNumber(5)}>setNumber</button>
    </div>
  );
};

export default Counter;
