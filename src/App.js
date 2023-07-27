// src/App.js (or TodoApp.js)
import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import TodoApp from "./pages/TodoApp";

function App() {
    return (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    );
}

export default App;
