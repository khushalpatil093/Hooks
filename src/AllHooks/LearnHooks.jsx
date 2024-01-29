import React from "react";
import Logo from "../assets/react.svg"

const LearnHooks = () => {
  return (
    <div>
      <div>
        <img  style={{height: "10em"}} src={Logo} alt="React logo" />
        <h1>Let's Learn React Hooks</h1>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>
          Hooks let you use different React features from your components. You
          can either use the built-in Hooks or combine them to build your own.
        </p>
      </div>
    </div>
  );
};

export default LearnHooks;
