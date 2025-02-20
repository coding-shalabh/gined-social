import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import usersReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
});

const store = createStore(rootReducer);

export default store;
