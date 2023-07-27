import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/actions';
import { Button, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoApp = () => {
    const [newTodoText, setNewTodoText] = useState('');
    const todos = useSelector((state) => state.todos);
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
        <>
            <div style={{ maxWidth: '400px', margin: '0 auto', marginTop: '20px' }}>
                <TextField
                    variant="outlined"
                    label="Add Todo"
                    fullWidth
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleAddTodo} style={{ marginTop: '10px' }}>
                    Add
                </Button>
                <List style={{ marginTop: '20px' }}>
                    {todos.map((todo) => (
                        <ListItem key={todo.id}>
                            <ListItemText primary={todo.text} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTodo(todo.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        </>
    );
};

export default TodoApp;
