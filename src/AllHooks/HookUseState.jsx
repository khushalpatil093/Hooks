import React, { useState } from "react";

const HookUseState = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <div>
        <h2>useState Hook</h2>
        <button onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>
          'useState' is a React Hook that lets you add a state variable to your
          component.
        </p>
        <p style={{ fontWeight: "bold" }}>
          In React, the 'useState' hook is used to add state to functional
          components. It allows you to declare state variables in functional
          components, providing a way to manage and update state in a way that
          is both concise and easy to understand.
        </p>
      </div>
    </div>
  );
};

export default HookUseState;
