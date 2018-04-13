import React from 'react'
import GoogleLogin from 'react-google-login'
import GoogleIcon from 'Resources/auth/google-plus.svg'

import { withStyles } from 'material-ui/styles'
import { GOOGLE_API_KEY } from 'Constants/config/services'
import PropTypes from 'prop-types'

const styles = () => ({
  buttonGoogle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: 165,
    height: 35,
    borderRadius: 4,
    background: '#db3236',
    color: 'white',
    border: '0px transparent',
    textAlign: 'center',
    '&:hover': {
      background: '#db3236',
      opacity: '0.6'
    }
  },
})

@withStyles(styles)
class GoogleSignIn extends React.PureComponent{

  constructor (props) {
    super(props)
  }

  render () {
    const {onSuccess, onFailure, classes} = this.props

    return (
      <GoogleLogin
        clientId={GOOGLE_API_KEY}
        className={classes.buttonGoogle}
        onSuccess={onSuccess}
        onFailure={onFailure}>
        <GoogleIcon style={{
          width: 24,
          marginRight: 5
        }}/>
        <span>Google Sign In</span>
      </GoogleLogin>
    )
  }
}

GoogleSignIn.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func,
}

export default GoogleSignIn