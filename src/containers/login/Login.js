import React from 'react';
import {connect} from 'react-redux'
import Logo from 'Resources/logo.nsvg';
import './Login.css';
import {login} from "Actions/login/LoginActions";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextInputField from 'Components/global/TextInputField'
import Progress from 'Components/global/Progress'

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
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onEmailChanged = this.onEmailChanged.bind(this);
    }

    login() {
        this.props.login(this.state.email, this.state.password);
    }

    onEmailChanged(value) {

        this.setState(state => ({
            email: value,
            password: state.password
        }))
    }

    onPasswordChanged(value) {

        this.setState((state) => ({
            email: state.email,
            password: value
        }))
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
                                <TextInputField
                                    type="email-input"
                                    id="email"
                                    fullWidth
                                    label="Email"
                                    onChange={this.onEmailChanged}
                                    value={this.state.email}
                                    error={this.props.emailValidationError}/>
                            </Grid>
                            <Grid>
                                <TextInputField
                                    id="password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={this.onPasswordChanged}
                                    value={this.state.password}
                                    error={this.props.passwordValidationError}/>
                            </Grid>

                            <Grid item>
                                <Button variant="raised" color="primary" onClick={this.login}>Авторизация</Button>
                            </Grid>


                            <Grid item>
                                <Progress isLoading={this.props.isLoading}/>
                            </Grid>


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


