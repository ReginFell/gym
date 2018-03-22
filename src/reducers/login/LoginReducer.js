import {LOGIN, LOGIN_EMAIL_VALIDATION_FAILED, LOGIN_PASSWORD_VALIDATION_FAILED} from 'ActionTypes'

const initialState = {
    isEmailValid: true,
    isPasswordValid: true
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN_EMAIL_VALIDATION_FAILED:
            return {
                isEmailValid: false,
                isPasswordValid: state.isEmailValid
            };
        case LOGIN_PASSWORD_VALIDATION_FAILED:
            return {
                isEmailValid: state.isEmailValid,
                isPasswordValid: false
            };
        case LOGIN:
            return {
                isEmailValid: true,
                isPasswordValid: true
            };
        default:
            return state;
    }
}