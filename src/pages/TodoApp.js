// TodoApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../actions/actions';

const TodoApp = () => {
    const [newTodoText, setNewTodoText] = useState('');
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (newTodoText.trim() !== '') {
            dispatch(addTodo(newTodoText));
            setNewTodoText('');
        }
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
