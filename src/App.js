import "bootstrap/scss/bootstrap.scss"

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import {Router, Route, } from 'react-router';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import Login from 'Containers/login/Login';

import reducers from 'Reducers/index'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <Route path="/" component={Login}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();