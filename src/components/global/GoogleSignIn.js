import React from 'react'
import GoogleLogin from 'react-google-login'
import GoogleIcon from 'Resources/google-plus.nsvg'

import { withStyles } from 'material-ui/styles'
import { GOOGLE_API_KEY } from 'Constants/config/services'

const styles = () => ({
  btnGoogle: {
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
    let {classes} = this.props

    return (
      <GoogleLogin
        clientId={GOOGLE_API_KEY}
        className={classes.btnGoogle}
        onSuccess={response => {
          console.log(response)
        }}
        onFailure={error => {
          console.log(error)
        }}>
        <GoogleIcon style={{
          width: 24,
          height: 24,
          marginLeft:
            '5px'
        }}/>
        <span>Google Sign In</span>
      </GoogleLogin>
    )
  }
}

export default GoogleSignIn