import React from 'react';
import {connect} from 'react-redux'

class Registration extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Test</div>
        );
    }
}

const mapStateToProps = (state) => {

};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Registration);