import * as types from "Constants/ActionTypes";
import { replace } from 'react-router-redux';

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: types.LOG_OUT
    });
    dispatch(replace('/'))
};