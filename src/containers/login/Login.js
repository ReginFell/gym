import React from 'react';
import {connect} from 'react-redux'
import Logo from 'Resources/logo.nsvg';
import './Login.css';
import {login} from "Actions/login/LoginActions";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import {CircularProgress} from 'material-ui/Progress';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Paper from 'material-ui/Paper';

import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    root: {
        width: '100%',
        margin: '0'
    },
    container: {
        'justify-content': 'center',
        'align-items': 'center'
    },
    paper: {
        padding: theme.spacing.unit * 2,
    },
});

@withStyles(styles)
@connect(state => ({
        isLoading: state.app.isLoading,
        authError: state.login.authError,
        emailValidationError: state.login.emailValidationError,
        passwordValidationError: state.login.passwordValidationError
    }),
    {login: login})
class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.login = this.login.bind(this);
    }

    login() {
        this.props.login(this.state.email, this.state.password);
    }

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={8} className={classes.root} justify="center">
                <Grid>
                    <Paper className={classes.paper}>
                        <Grid container className={classes.container} direction='column'>

                            <Grid>
                                <Logo height={250} width={400}/>
                            </Grid>

                            <Grid item>
                                <FormControl error={this.props.emailValidationError}>
                                    <InputLabel required>Email</InputLabel>
                                    <Input
                                        type="email-input"
                                        id="email"
                                        fullWidth
                                        label="Email"
                                        margin="dense"
                                        onChange={(event) => this.state.email = event.target.value}/>
                                    <FormHelperText>{this.props.emailValidationError}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid>
                                <FormControl error={this.props.passwordValidationError}>
                                    <InputLabel required>Password</InputLabel>
                                    <Input
                                        id="password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        margin="none"
                                        onChange={(event) => this.state.password = event.target.value}/>
                                    <FormHelperText>{this.props.passwordValidationError}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button variant="raised" color="primary" onClick={this.login}>Авторизация</Button>
                            </Grid>

                            {this.props.isLoading ?
                                <Grid item>
                                    <CircularProgress thickness={7}/>
                                </Grid> : null
                            }

                            {this.props.authError ?
                                <Grid item>
                                    <div>Auth Error: {this.props.authError}</div>
                                </Grid> : null
                            }


                            <Grid item>
                                <Button variant="raised" color="secondary"
                                        onClick={() => this.props.history.push('/registration')}>Регистрация</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Login;


