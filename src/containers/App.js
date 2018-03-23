import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {isLogged} from 'Actions/LoginActions';

class App extends React.Component {
    componentDidMount() {
        this.props.isLogged();
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <Redirect to="/signin" push={true}/>
    }
}

const mapActionsToProps = {
    isLogged: isLogged,
};

export default connect(null, mapActionsToProps)(App);