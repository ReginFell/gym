import React from 'react';
import {connect} from 'react-redux'

import Grid from 'material-ui/Grid';
import {logout} from "Actions/dashboard/DashboardActions";
import Header from "Components/global/Header"
import Calendar from 'rc-calendar'

import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    container: {

        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },
    calendar: {
        width: '100%'
    }
});

@withStyles(styles)
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
        const {classes} = this.props;

        return <Grid container className={classes.container}>
            <Header/>
            <Calendar
                style={{margin: 10}}
                fullscreen={false}
            />
        </Grid>
    }
}

export default Dashboard;