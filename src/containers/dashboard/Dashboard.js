import React from 'react';
import {connect} from 'react-redux'

import {Button} from 'reactstrap';
import {logout} from "Actions/dashboard/DashboardActions";

@connect(null, {logout: logout})
class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout();
    }

    render() {
        return <Button onClick={this.logout}> Logout </Button>
    }
}

export default Dashboard;