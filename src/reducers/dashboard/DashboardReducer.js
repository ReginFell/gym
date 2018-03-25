import {LOG_OUT} from "Constants/ActionTypes";

const initialState = {
    isLogged: true,
};

export default (state = initialState, {type}) => {
    switch (type) {
        case LOG_OUT:
            return {
                isLogged: false
            };
        default:
            return state;
    }
}