import "bootstrap/scss/bootstrap.scss"

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import Login from 'Containers/login/Login';
import App from 'Containers/App';
import Registration from 'Containers/registration/Registration';

import reducers from 'Reducers/index'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/signin" component={Login}/>
                <Route exact path="/signup" component={Registration}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();