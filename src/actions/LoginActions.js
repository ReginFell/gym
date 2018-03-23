import * as types from 'Constants/ActionTypes'

import api from 'Api/index'

export const login = (email, password) => dispatch => {
    api.auth.signIn(email, password)
        .then((res) => {
            dispatch({type: types.LOGIN_SUCCESS, payload: res.data.token})
        })
        .catch((error) => {
            dispatch({type: types.LOGIN_ERROR, payload: error.toString()})
        });
};