import React, { useMemo, useState } from "react";

const HookUseMemo = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const memoizedResult = useMemo(() => {
    console.log("Recalculating memoizedResult");
    return count * 2;
  }, [count]);

  return (
    <div>
      <div>
        <h2>useMemo Hook</h2>
        <h2>{count}</h2>
        <h2>Memoized Result : {memoizedResult}</h2>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>
          In React, the 'useMemo' hook is used to memoize the result of a
          computation so that it is not recomputed on every render unless the
          dependencies specified in the dependency array change. This can help
          improve the performance of your application by avoiding unnecessary
          recalculations.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Using useMemo is beneficial when you have expensive computations that
          don't need to be recalculated on every render, and you want to
          optimize the performance of your React components.
        </p>
      </div>
    </div>
  );
};

export default HookUseMemo;
