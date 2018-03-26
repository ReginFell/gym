import React from 'react';
import {connect} from 'react-redux'
import Logo from 'Resources/logo.nsvg';
import './Login.css';
import {login} from "Actions/login/LoginActions";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,

        'justify-content': 'center'
    },
    container: {
        'justify-content': 'center',
        'align-items': 'center',

    },
    paper: {
        padding: theme.spacing.unit * 2,

    },
});

@withStyles(styles)
@connect(state => ({
    isLoading: state.login.isLoading,
    authError: state.login.authError
}), {login: login})
class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.login = this.login.bind(this);

        this.handleRegistrationClick = this.handleRegistrationClick.bind(this);
    }

    login() {
        this.props.login(this.state.email, this.state.password);
    }

    handleRegistrationClick() {
        this.props.history.push('/registration')
    };

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={8} className={classes.root}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Grid container className={classes.container} direction='column'>

                            <Grid item xs={12} md={12}>
                                <Logo height={250}/>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField required type="email-input" id="email" label="Email" margin="normal"
                                           onChange={(event) => this.state.email = event.target.value}/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required id="password-input" label="Password" type="password"
                                           autoComplete="current-password" margin="normal"
                                           onChange={(event) => this.state.password = event.target.value}/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Button variant="raised" color="primary" onClick={this.login}>Авторизация</Button>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                AuthError: {this.props.authError}
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <Button variant="raised" color="secondary"
                                        onClick={this.handleRegistrationClick}>Регистрация</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Login;


