import { ADD_USER, REMOVE_USER } from '../actions';
import usersData from '../../TemporaryData/usersJson';

const initialUserState = {
    users: usersData,
};

const usersReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload),
            };
        default:
            return state;
    }
};

export default usersReducer;
