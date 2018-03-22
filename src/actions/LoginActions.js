import * as types from 'ActionTypes';

export function login(email, password) {
    if (!email) {
        return {
            type: types.LOGIN_EMAIL_VALIDATION_FAILED,
            email
        };
    }
    if (!password) {
        return {
            type: types.LOGIN_PASSWORD_VALIDATION_FAILED,
            password
        };
    }
    return {
        type: types.LOGIN,
        email
    };
}