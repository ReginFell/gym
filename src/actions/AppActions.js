import {LOG_OUT} from "Constants/ActionTypes";

import {replace} from 'react-router-redux'

export const isLogged = () => (dispatch) => {
    const token = localStorage.getItem('token');
    if (token && token.length > 0) {
        dispatch(replace('/dashboard'));
    } else {
        dispatch(replace('/signin'));
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: LOG_OUT
    });
    dispatch(replace('/'))
};