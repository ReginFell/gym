import React from 'react'
import FacebookLogin from 'react-facebook-login'
import FacebookIcon from 'Resources/auth/facebook.svg'

import { withStyles } from 'material-ui/styles'

import { FACEBOOK_CLIENT_ID } from 'Constants/config/services'

const styles = () => ({
  buttonFacebook: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: 165,
    height: 35,
    borderRadius: 4,
    background: '#3b5998',
    color: 'white',
    border: '0px transparent',
    textAlign: 'center',
    '&:hover': {
      background: '#3b5998',
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
      <FacebookLogin
        appId={FACEBOOK_CLIENT_ID}
        textButton={<span>Facebook Sign In</span>}
        cssClass={classes.buttonFacebook}
        autoLoad={true}
        fields="name, email, picture"
        onClick={() => {}}
        callback={(() => {})}

        icon={<FacebookIcon style={{
          width: 16,
          marginRight: 5
        }}/>

        }
      />
    )
  }
}

export default GoogleSignIn