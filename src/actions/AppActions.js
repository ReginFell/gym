import {replace} from 'react-router-redux'

export const isLogged = () => (dispatch) => {
    const token = localStorage.getItem('token');
    if (token && token.length > 0) {
        dispatch(replace('/dashboard'));
    } else {
        dispatch(replace('/signin'));
    }
};