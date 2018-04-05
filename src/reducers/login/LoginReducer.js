import {
    LOADING,
    LOGIN_ERROR,
    CLEAR_FORM_ERRORS,
    EMAIL_VALIDATION_FAILED,
    PASSWORD_VALIDATION_FAILED
} from 'Constants/ActionTypes'

const initialState = {
    authError: "",
    emailValidationError: "",
    passwordValidationError: ""
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case CLEAR_FORM_ERRORS:
            return {
                authError: state.authError,
                emailValidationError: "",
                passwordValidationError: ""
            };
        case EMAIL_VALIDATION_FAILED:
            return {
                authError: state.authError,
                emailValidationError: "Email введен некоректно, попробуйте использовать человеческий формат.",
                passwordValidationError: state.passwordValidationError
            };
        case PASSWORD_VALIDATION_FAILED:
            return {
                authError: state.authError,
                emailValidationError: state.emailValidationError,
                passwordValidationError: "Пароль должен содержать как минимум 6 цифр"
            };
        case LOGIN_ERROR:
            return {
                authError: payload
            };
        case LOADING:
            return initialState;

        default:
            return state;
    }
}