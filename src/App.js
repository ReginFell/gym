import "bootstrap/scss/bootstrap.scss"

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import Login from 'Containers/login/Login';
import reducers from 'Reducers/index'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Login/>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();