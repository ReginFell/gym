import React from 'react';
import {CircularProgress} from 'material-ui/Progress';
import PropTypes from 'prop-types';

class Progress extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return this.props.isLoading ? <CircularProgress thickness={7}/> : null
    }
}

Progress.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default Progress