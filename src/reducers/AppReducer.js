import {TOKEN_DOES_NOT_EXIST, TOKEN_EXISTS} from "Constants/ActionTypes";

const initialState = {
    isLoading: true,
    token: null,
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case TOKEN_EXISTS:
            return {
                isLoading: false,
                token: payload
            };
        case TOKEN_DOES_NOT_EXIST:
            return {
                isLoading: false,
                token: null
            };
        default:
            return state;
    }
}