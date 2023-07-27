// store 폴더 안에 store.js => 스토어를 생성한 후 리듀서를 등록한다.

import { createStore, combineReducers } from 'redux';
import todoReducer from "../reducers/todoReducer";

// 여러 개의 리듀서를 combineReducers로 합칩니다.
const rootReducer = combineReducers({
    todos: todoReducer,
});

const store = createStore(rootReducer);

export default store;