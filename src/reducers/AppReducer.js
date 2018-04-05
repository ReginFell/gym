import {LOG_OUT, START_LOADING, STOP_LOADING} from "Constants/ActionTypes";

const initialState = {
    isLoading: false,
    token: null,
};

export default (state = initialState, {type}) => {
    switch (type) {
        case START_LOADING:
            return {
                isLoading: true,
                token: state.token
            };
        case STOP_LOADING:
            return {
                isLoading: false,
                token: state.token
            };
        case LOG_OUT:
            return {
                token: null
            };
        default:
            return state;
    }
}