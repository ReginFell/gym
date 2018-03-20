import "bootstrap/scss/bootstrap.scss"

import React from 'react';
import ReactDOM from 'react-dom';

import Login from 'Containers/login/Login';

ReactDOM.render(
    <Login />,
    document.getElementById('app')
);

module.hot.accept();