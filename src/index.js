import "bootstrap/scss/bootstrap.scss"

import React from 'react';
import ReactDOM from 'react-dom';

import Login from './containers/login/Login';

ReactDOM.render(
    <Login />,
    document.getElementById('app')
);

module.hot.accept();