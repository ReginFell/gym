import React from 'react';
import {connect} from 'react-redux';

import {isLogged} from 'Actions/AppActions';

class App extends React.Component {
    componentDidMount() {
        this.props.isLogged();
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <div/>
    }
}

const mapActionsToProps = {
    isLogged: isLogged,
};

export default connect(null, mapActionsToProps)(App);