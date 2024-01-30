import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = { count: 0 };

const HookUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <div>
          <h2>useReducer Hook</h2>
          <h2>Count : {state.count}</h2>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>
            useReducer is another React hook that is used for managing more
            complex state
          </p>
          <p style={{ fontWeight: "bold" }}>
            The useReducer hook takes two arguments: a reducer function and an
            initial state. The reducer function receives the current state and
            an action as arguments, and it returns the new state based on the
            action type.
          </p>
        </div>
      </div>
    </>
  );
};

export default HookUseReducer;
