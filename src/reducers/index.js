import {combineReducers} from 'redux'

import loginReducer from 'Reducers/login/LoginReducer'

const reducers = combineReducers({
    login: loginReducer
});

export default reducers