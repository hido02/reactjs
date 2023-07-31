// src/App.js (or TodoApp.js)
import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import TodoApp from "./pages/TodoApp";
import Discussion from './components/Discussion'; 

function App() {
    return (
        <Provider store={store}>
            <TodoApp />
            <Discussion />
        </Provider>
    );
}

export default App;
