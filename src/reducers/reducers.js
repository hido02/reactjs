// reducers 폴더 안에 reducers.js => 모든 리듀서를 합쳐준다.

import { combineReducers } from 'redux';
import todoReducer from "./todoReducer";
import { discussionReducer } from './discussionReducer';

const rootReducer = combineReducers({
    todoReducer,
    discussionReducer,
});

export default rootReducer;