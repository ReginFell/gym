import * as types from 'Constants/ActionTypes'
import api from 'Api/index'
import { push } from 'react-router-redux';

export const login = (email, password) => dispatch => {
    api.auth.signIn(email, password)
        .then((res) => {
            localStorage.setItem('token', res.data.token);
            dispatch({type: types.LOGIN_SUCCESS, payload: res.data.token})
            dispatch(push('/login'))
        })
        .catch((error) => {
            dispatch({type: types.LOGIN_ERROR, payload: error.toString()})
        });
};