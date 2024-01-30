import React, { useCallback, useState } from "react";

const HookUseCallback = () => {

    const [count, setCount] = useState(0);

    const handleClickWithoutCallback = () => {
        console.log("Clicked without Callback");
        setCount((prev) => prev + 1);
    }

    const handleClickWithCallback = useCallback(() => {
        console.log("Clicked with callback");
        setCount((prev) => prev + 1);
    }, [])

  return (
    <div>
      <div>
        <h2>useCallback Hook</h2>
        <h2>{count}</h2>
        <button onClick={handleClickWithoutCallback}>Clicked Without Callback</button>
        <br/>
        <button onClick={handleClickWithCallback}>Clicked With Callback</button>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>
          useCallback is similar to useMemo where useMemo memoized the value but
          here useCallback memoized the whole function
        </p>
        <p style={{ fontWeight: "bold" }}>
          useCallback is a React Hook that is used to memoize functions in
          functional components. When a function is wrapped with useCallback,
          React will memoize the function, ensuring that the same function
          reference is returned as long as its dependencies remain unchanged.
          This can be beneficial for performance optimization in scenarios where
          functions are passed down to child components, preventing unnecessary
          re-renders.
        </p>
      </div>
    </div>
  );
};

export default HookUseCallback;
