import React, { createContext, useContext } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const sharedValue = {
    name : "Khushal",
    age : 22,
    details: "Hello from context"
  };

  return (
    <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>
  );
};

const MyComponenet = () => {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <div>
        <h2>useContext Hook</h2>
        <h2>{contextValue.details}</h2>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>
          'useContext' is a React hook that allows functional components to
          consume values from a React context. React context provides a way to
          pass data through the component tree without having to pass props
          manually at every level.
        </p>
      </div>
    </div>
  );
};

const HookUseContext = () => {
  return (
    <>
      <MyProvider>
        <MyComponenet />
      </MyProvider>
    </>
  );
};

export default HookUseContext;
