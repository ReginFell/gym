import React from 'react'
import { connect } from 'react-redux'
import Logo from 'Resources/logo.nsvg'
import { login } from 'Actions/login/LoginActions'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import TextInputField from 'Components/global/TextInputField'
import Progress from 'Components/global/Progress'
import GoogleLogin from 'react-google-login'
import { GOOGLE_API_KEY } from 'Constants/config/services'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    width: 500,
    alignItems: 'center',
    flexDirection: 'column'
  },
  logo: {
    height: 300
  },
  social_container: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing.unit * 2
  }
})

@withStyles(styles)
@connect(
  state => ({
    isLoading: state.app.isLoading,
    authError: state.login.authError,
    emailValidationError: state.login.emailValidationError,
    passwordValidationError: state.login.passwordValidationError
  }),
  {login: login}
)
class Login extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.login = this.login.bind(this)
    this.onPasswordChanged = this.onPasswordChanged.bind(this)
    this.onEmailChanged = this.onEmailChanged.bind(this)
  }

  login () {
    this.props.login(this.state.email, this.state.password)
  }

  onEmailChanged (value) {
    this.setState(state => ({
      email: value,
      password: state.password
    }))
  }

  onPasswordChanged (value) {
    this.setState((state) => ({
      email: state.email,
      password: value
    }))
  }

  render () {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Logo className={classes.logo}/>
          <TextInputField
            type='email-input'
            id='email'
            label='Email'
            onChange={this.onEmailChanged}
            value={this.state.email}
            error={this.props.emailValidationError}
          />

          <TextInputField
            id='password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            onChange={this.onPasswordChanged}
            value={this.state.password}
            error={this.props.passwordValidationError}
          />

          <div className={classes.social_container}>
            <GoogleLogin
              clientId={GOOGLE_API_KEY}
              buttonText='Google Sign In'
              onSuccess={response => {
                console.log(response)
              }}
              onFailure={error => {
                console.log(error)
              }}
            />
          </div>

          <Button
            className={classes.button}
            variant='raised'
            color='primary'
            onClick={this.login}
          >
            Авторизация
          </Button>

          <Progress isLoading={this.props.isLoading}/>

          <Button
            className={classes.button}
            variant='raised'
            color='secondary'
            onClick={() => this.props.history.push('/signup')}
          >
            Регистрация
          </Button>

          {this.props.authError ? (
            <div>Auth Error: {this.props.authError}</div>
          ) : null}
        </Paper>
      </div>
    )
  }
}

export default Login
