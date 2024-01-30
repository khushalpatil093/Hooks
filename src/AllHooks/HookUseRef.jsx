import React, { useRef } from 'react'

const HookUseRef = () => {

    const countRef = useRef(0);

    const handleClick = () => {
        // Modifying the current value without triggering a re-render
        countRef.current += 1;
        console.log(`Button clicked ${countRef.current} times`);
    };

  return (
    <div>
        <div>
            <h2>useRef Hook</h2>
            <h2>{countRef.current}</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
        <div>
            <p style={{fontWeight: "bold"}}>useRef is also useful for persisting values across renders without causing re-renders. The value assigned to current does not trigger a re-render when it changes, making it suitable for storing mutable values without affecting the component's render cycle.</p>
            <p style={{fontWeight: "bold"}}>This allows you to persist data between renders without affecting the rendering cycle of your component.</p>
        </div>
    </div>
  )
}

export default HookUseRef;