export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});

export const removeUser = (userId) => ({
    type: REMOVE_USER,
    payload: userId,
});

export const login = (user) => ({
    type: LOGIN,
    payload: user,
});


export const logout = () => (dispatch) => {
    localStorage.removeItem('userId'); // ✅ Remove from localStorage here
    dispatch({ type: LOGOUT }); // ✅ Ensure Redux updates state
};