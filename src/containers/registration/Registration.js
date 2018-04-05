import React from 'react';
import {connect} from 'react-redux'
import {withStyles} from "material-ui/styles/index";
import {registration} from "Actions/registration/RegistrationActions";
import Logo from 'Resources/logo.nsvg';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextInputField from 'Components/global/TextInputField'
import Progress from 'Components/global/Progress'

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
    registrationError: state.registration.registrationError,
    emailValidationError: state.registration.emailValidationError,
    passwordValidationError: state.registration.passwordValidationError,
    passwordMatchValidationError: state.registration.passwordMatchValidationError,
}), {registration: registration})
class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            passwordConfirmation: ''
        };

        this.register = this.register.bind(this);
        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onPasswordConfirmationChanged = this.onPasswordConfirmationChanged.bind(this);
    }

    register() {
        this.props.registration(this.state.email, this.state.password, this.state.passwordConfirmation);
    }

    onEmailChanged(value) {
        this.setState(state => ({
            email: value,
            password: state.password,
            passwordConfirmation: state.passwordConfirmation
        }))
    }

    onPasswordChanged(value) {
        this.setState((state) => ({
            email: state.email,
            password: value,
            passwordConfirmation: state.passwordConfirmation
        }))
    }

    onPasswordConfirmationChanged(value) {
        this.setState((state) => ({
            email: state.email,
            password: state.password,
            passwordConfirmation: value
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

                            <Grid item>
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
                                <TextInputField
                                    id="password-repeat-input"
                                    label="Repeat Password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={this.onPasswordConfirmationChanged}
                                    value={this.state.passwordConfirmation}
                                    error={this.props.passwordMatchValidationError}/>
                            </Grid>

                            <Grid item>
                                <Button variant="raised" color="secondary" onClick={this.register}>Регистрация</Button>
                            </Grid>

                            <Grid item>
                                <Progress isLoading={this.props.isLoading}/>
                            </Grid>

                            {this.props.registrationError ?
                                <Grid item>
                                    <div>Registration Error: {this.props.registrationError}</div>
                                </Grid> : null
                            }
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Registration;