import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  return (
    <div>
      <div>
        <h2>useEffect Hook</h2>
        <h2>{screenWidth}</h2>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>
          useEffect takes two thing one an callback and another is array
          dependencies.
        </p>
        <p style={{ fontWeight: "bold" }}>
          In React, the 'useEffect' hook is used for handling side effects in
          functional components. Side effects are operations or actions that
          occur outside the scope of the regular render cycle, such as data
          fetching, subscriptions, manual DOM manipulations, and more.
        </p>
        <p style={{ fontWeight: "bold" }}>
          'useEffect' is a powerful hook that enables you to manage side effects
          in your functional components, and it's crucial for handling tasks
          like data fetching, subscriptions, and other asynchronous operations.
        </p>
      </div>
    </div>
  );
};

export default HookUseEffect;
