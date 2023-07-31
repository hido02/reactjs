// actions.js
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, ADD_DISCUSSION, FETCH_DISCUSSIONS_REQUEST, FETCH_DISCUSSIONS_ERROR, FETCH_DISCUSSIONS_SUCCESS } from './actionTypes';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: { id },
});


export const addDiscussion = (author, title, createdAt) => {
    let avatarUrl = 'https://p.kindpng.com/picc/s/33-338711_circle-user-icon-blue-hd-png-download.png';
  // unknown user avatar img
    return {
        type: ADD_DISCUSSION,
        payload: {
            author,
            title,
            createdAt,
            avatarUrl,
        }
    }
}

export const fetchDiscussionsRequest = () => {
  return {
    type: FETCH_DISCUSSIONS_REQUEST
  }
}

export const fetchDiscussionsError = (error) => {
  return {
    type: FETCH_DISCUSSIONS_ERROR,
    payload: error
  }
}

export const fetchDiscussionsSuccess = discussions => ({
  type: FETCH_DISCUSSIONS_SUCCESS,
  payload: {discussions}
})
