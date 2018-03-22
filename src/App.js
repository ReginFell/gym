import "bootstrap/scss/bootstrap.scss"

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import Login from 'Containers/login/Login';
import reducers from 'Reducers/index'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Login/>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();