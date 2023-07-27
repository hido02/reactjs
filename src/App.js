// src/App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT } from "./redux/actions";

function App() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
        </div>
    );
}

export default App;
