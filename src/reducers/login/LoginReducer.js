import {Map} from 'immutable';

import {
    LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from 'Constants/ActionTypes'

const initialState = {
    isLoading: false,
    authError: "",
    token: ""
};

export default (state = initialState, {type, payload}) => {
    console.log(payload);
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                isLoading: false,
                authError: "",
                token: payload
            };
        case LOGIN_ERROR:
            return {
                isLoading: false,
                authError: payload,
                token: ""
            };
        case LOADING:
            return initialState;

        default:
            return state;
    }
}