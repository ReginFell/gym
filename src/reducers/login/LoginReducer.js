import {Map} from 'immutable';

import {
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from 'Constants/ActionTypes'

const initialState = {
    authError: "",
    token: ""
};

export default (state = initialState, {type, payload}) => {
    console.log(payload);
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                authError: "",
                token: payload
            };
        case LOGIN_ERROR:
            return {
                authError: payload,
                token: ""
            };
        default:
            return state;
    }
}