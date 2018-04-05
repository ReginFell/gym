import {
    LOADING,
    CLEAR_FORM_ERRORS,
    EMAIL_VALIDATION_FAILED,
    PASSWORD_VALIDATION_FAILED,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR, PASSWORD_DOESNT_MATCH
} from 'Constants/ActionTypes'

const initialState = {
    registrationError: "",
    emailValidationError: "",
    passwordValidationError: "",
    passwordMatchValidationError: ""
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case CLEAR_FORM_ERRORS:
            return {
                registrationError: state.registrationError,
                emailValidationError: "",
                passwordValidationError: "",
                passwordMatchValidationError: ""
            };
        case EMAIL_VALIDATION_FAILED:
            return {
                registrationError: state.registrationError,
                emailValidationError: "Email введен некоректно, попробуйте использовать человеческий формат.",
                passwordValidationError: state.passwordValidationError,
                passwordMatchValidationError: state.passwordMatchValidationError
            };
        case PASSWORD_VALIDATION_FAILED:
            return {
                registrationError: state.registrationError,
                emailValidationError: state.emailValidationError,
                passwordValidationError: "Пароль должен содержать как минимум 6 цифр",
                passwordMatchValidationError: state.passwordMatchValidationError
            };
        case PASSWORD_DOESNT_MATCH:
            return {
                registrationError: state.registrationError,
                emailValidationError: state.emailValidationError,
                passwordValidationError: state.passwordValidationError,
                passwordMatchValidationError: "Пароли не совпадают"
            };
        case REGISTRATION_ERROR:
            return {
                registrationError: payload
            };
        case LOADING:
            return initialState;

        default:
            return state;
    }
}