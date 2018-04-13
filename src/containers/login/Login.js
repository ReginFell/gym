import React from 'react'
import { connect } from 'react-redux'
import Logo from 'Resources/logo.svg'
import { login } from 'Actions/login/LoginActions'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextInputField from 'Components/global/TextInputField'
import Progress from 'Components/global/Progress'
import GoogleSignIn from 'Components/auth/GoogleSignIn'
import FacebookSignIn from 'Components/auth/FacebookSignIn'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    width: 400,
    alignText: 'center',
    flexDirection: 'column'
  },
  social_container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  registrationButton: {
    padding: theme.spacing.unit,
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
          <Typography
            style={{display: 'flex', justifyContent: 'center', fontSize: '2rem'}}>Как дела в качалке?</Typography>
          <Logo height={300}/>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <TextInputField
              type='email-input'
              id='email'
              label='Email'
              onChange={this.onEmailChanged}
              value={this.state.email}
              error={this.props.emailValidationError}/>

            <TextInputField
              id='password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              onChange={this.onPasswordChanged}
              value={this.state.password}
              error={this.props.passwordValidationError}/>

            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Progress isLoading={this.props.isLoading}/>
            </div>

            {this.props.authError ? (
              <div style={{display: 'flex', justifyContent: 'center'}}>Auth Error: {this.props.authError}</div>
            ) : null}

            <Button
              className={classes.button}
              variant='raised'
              color='primary'
              onClick={this.login}>Авторизация</Button>
          </div>

          <div
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 16, marginBottom: 16}}>
            <div style={{backgroundColor: 'black', height: 1, flexGrow: 3}}/>
            <Typography style={{flexGrow: 0, marginLeft: 16, marginRight: 16}}>Или</Typography>
            <div style={{backgroundColor: 'black', height: 1, flexGrow: 3}}>

            </div>
          </div>

          <div className={classes.social_container}>
            <GoogleSignIn/>
            <FacebookSignIn/>
          </div>

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 16}}>
            <Typography>Ну, а если нет аккаунта, то может</Typography>
            <Button
              className={classes.registrationButton}
              color='secondary'
              onClick={() => this.props.history.push('/signup')}>Регистрация</Button>
            <Typography>?</Typography>
          </div>
        </Paper>
      </div>
    )
  }
}

export default Login
