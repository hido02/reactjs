// reducers.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actions';

const initialState = {
    isLoggedIn: false,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case LOGIN_FAILURE:
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
