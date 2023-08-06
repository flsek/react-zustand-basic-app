import React from "react";
import { useCounterStore } from "../store/useCounterStore";

const Counter = () => {
  const { count, increment, decrement, reset, setNumber } = useCounterStore();
  const clear = () => {
    useCounterStore.persist.clearStorage();
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setNumber(5)}>setNumber</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};

export default Counter;
