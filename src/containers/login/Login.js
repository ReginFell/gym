import React from 'react';
import {connect} from 'react-redux'
import Logo from 'Resources/logo.nsvg';
import './Login.css';
import {login} from "Actions/login/LoginActions";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import { withStyles } from 'material-ui/styles';
import CenterView from 'Components/global/CenterView'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
 const { classes } = this.props;

        return (


            <Grid container spacing={16} className="App">
<Grid item xs>
          <Paper className={classes.paper}>xs</Paper>

     <Logo/>


 <TextField
          required
          type="email-input"
          id="email"
          label="Email"
          margin="normal"
          onChange={(event) => this.state.email = event.target.value}
        />

 <TextField
  required
          id="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          onChange={(event) => this.state.password = event.target.value}
        />



                    <Button variant="raised" color="primary" onClick={this.login} block>Авторизация</Button>

                    <div className="text-center">
                        AuthError: {this.props.authError}
                        </div>

                    <Button variant="raised" color="secondary" onClick={this.handleRegistrationClick} block>Регистрация</Button>

            </Grid></Grid>
        );
    }
}

export default Login;