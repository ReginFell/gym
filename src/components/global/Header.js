import React from 'react';
import {connect} from 'react-redux'
import Logo from 'Resources/logo.svg';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography'

import {logout} from 'Actions/AppActions'
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    container: {
        backgroundColor: '#00897B',
        display: 'flex',
        height: 80,
        width: '100%',
        justifyContent: 'left',
        flexWrap: 'wrap',
        flexGrow: 1
    },

    userBlock: {
        height: 80,
        width: 100,
        backgroundColor: '#00897B',
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'top|center',
        alignItems: 'center',
        flexDirection: 'column',
        transition: 'height 0.3s linear',
        '&:hover': {
            height: 120,
        }
    },
    headerButton: {
        color: theme.text.primary,
    },
    logo: {
        height: '5%',
        width: '5%'
    },
    logout: {
        color: theme.text.primary,
        marginTop: 'auto',
        width: '100%',
    },
    user: {
        color: theme.text.primary,
    },
    avatar: {
        marginBottom: 8,
        marginTop: 8,
    },
});

@withStyles(styles)
@connect(state => ({isLoading: state.app.token}), {logout: logout})
class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return <div className={classes.container}>
            <Button className={classes.headerButton}> Home </Button>
            <Button className={classes.headerButton}> Plan </Button>
            <Button className={classes.headerButton}> Trainings </Button>

            <div className={classes.userBlock}>
                <Avatar alt="Remy Sharp"
                        src="http://petspotential.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
                        className={classes.avatar}/>
                <Typography className={classes.user}>Ola Senioro</Typography>
                <Button size="small" className={classes.logout} onClick={this.props.logout}>Logout</Button>
            </div>
        </div>
    }
}

export default Header;