import React from 'react';
import {connect} from 'react-redux'
import Logo from 'Resources/logo.nsvg';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

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

    logo: {
        height: '5%',
        width: '5%'
    },
    logout: {
        marginTop: 'auto',
        width: '100%',
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
            <Button onClick={() => {
            }}> Home </Button>

            <div className={classes.userBlock}>
                <Avatar alt="Remy Sharp"
                        src="http://petspotential.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
                        className={classes.avatar}/>
                <label>Ola Senioro</label>
                <Button size="small" className={classes.logout} onClick={this.props.logout}>Logout</Button>
            </div>
        </div>
    }
}

export default Header;