// store.js 파일

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import todoReducer from "../reducers/todoReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { discussionReducer } from '../reducers/discussionReducer';

// 여러 개의 리듀서를 combineReducers로 합칩니다.
const rootReducer = combineReducers({
  todos: todoReducer,
  discussion: discussionReducer, // discussionReducer를 discussion 키로 등록
});

// Redux DevTools와 Redux Thunk 미들웨어를 함께 사용하도록 store enhancer를 합성합니다.
const composeEnhancers = composeWithDevTools({});

// 최종 store enhancer를 만듭니다.
const enhancer = composeEnhancers(applyMiddleware(thunk));

// createStore에 store enhancer를 전달합니다.
const store = createStore(rootReducer, enhancer);

export default store;
