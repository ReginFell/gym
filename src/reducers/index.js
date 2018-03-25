import {combineReducers} from 'redux'

import {routerReducer} from 'react-router-redux';
import loginReducer from 'Reducers/login/LoginReducer'
import appReducer from 'Reducers/AppReducer'
import dashboardReducer from 'Reducers/dashboard/DashboardReducer'

const reducers = combineReducers({
    login: loginReducer,
    app: appReducer,
    dashboard: dashboardReducer,
    router: routerReducer
});

export default reducers