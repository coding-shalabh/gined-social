import { LOGIN, LOGOUT } from '../actions';

const initialAuthState = {
    isAuthenticated: !!localStorage.getItem('userId'), // ✅ Correct initial state from localStorage
    user: null,
    currentUser: localStorage.getItem('userId') || null
};

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('userId', action.payload._id); // ✅ Store userId in localStorage
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                currentUser: action.payload._id
            };
        case LOGOUT:
            localStorage.removeItem('userId'); // ✅ Remove from localStorage here
            return {
                isAuthenticated: false, // ✅ Ensure Redux state updates
                user: null,
                currentUser: null
            };
        default:
            return state;
    }
};

export default authReducer;
