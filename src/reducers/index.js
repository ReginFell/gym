import {combineReducers} from 'redux'

import {routerReducer} from 'react-router-redux';
import loginReducer from 'Reducers/login/LoginReducer'
import registrationReducer from 'Reducers/registration/RegistrationReducer'
import appReducer from 'Reducers/AppReducer'
import dashboardReducer from 'Reducers/dashboard/DashboardReducer'

const reducers = combineReducers({
    app: appReducer,
    login: loginReducer,
    registration: registrationReducer,
    dashboard: dashboardReducer,
    router: routerReducer
});

export default reducers