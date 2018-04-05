import * as types from 'Constants/ActionTypes'
import api from 'Api/index'
import {push} from 'react-router-redux';
import {validateEmail, validatePassword} from 'Validators/common'

export const login = (email, password) => dispatch => {
    let isValid = true;

    dispatch({type: types.CLEAR_FORM_ERRORS});

    if (!validateEmail(email)) {
        dispatch({type: types.EMAIL_VALIDATION_FAILED});
        isValid = false;
    }

    if (!validatePassword(password)) {
        dispatch({type: types.PASSWORD_VALIDATION_FAILED});
        isValid = false;
    }

    if (isValid) {
        dispatch({type: types.START_LOADING});
        api.auth.signIn(email, password)
            .then((res) => {
                localStorage.setItem('token', res.data.token);

                dispatch({type: types.STOP_LOADING});
                dispatch(push('/dashboard'))
            })
            .catch((error) => {
                dispatch({type: types.STOP_LOADING});
                dispatch({type: types.LOGIN_ERROR, payload: error.toString()})
            });
    }
};