import {
    LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR, TO_REGISTRATION, REDIRECTED
} from 'Constants/ActionTypes'

const initialState = {
    isLoading: false,
    authError: ""
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                isLoading: false,
                authError: ""
            };
        case LOGIN_ERROR:
            return {
                isLoading: false,
                authError: payload,
            };
        case LOADING:
            return initialState;

        default:
            return state;
    }
}