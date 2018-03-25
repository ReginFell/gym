import "bootstrap/scss/bootstrap.scss"

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import Login from 'Containers/login/Login';
import Home from 'Containers/Home';
import Registration from 'Containers/registration/Registration';
import Dashboard from 'Containers/dashboard/Dashboard';

import reducers from 'Reducers/index'

const history = createHistory();
const browserMiddleware = routerMiddleware(history);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, browserMiddleware)));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={createHistory()}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signin" component={Login}/>
                <Route exact path="/signup" component={Registration}/>
                <Route exact path="/dashboard" component={Dashboard}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();