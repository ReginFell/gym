import axios from 'axios'

import host from 'Constants/config/host'

const signIn = (email, password, device_platform = 'web') => {
  const obj = {
    email: email,
    password: password,
    device_platform: device_platform,
  }
  console.log(obj)
  return axios.post(
    `${host}v1/auth/login`,
    obj,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
  )
}

const signInByGoogle = (token, device_platform = 'web', platform = 'google') => {
  const obj = {
    token: token,
    platform: platform,
    device_platform: device_platform,
  }
  console.log(obj)
  return axios.post(
    `${host}v1/auth/login`,
    obj,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
  )
}

const registration = (email, password, platform = 'web') => {
  const obj = {
    email: email,
    password: password,
    device_platform: platform,
  }
  console.log(obj)
  return axios.post(
    `${host}v1/auth/registration`,
    obj,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
  )
}

export default {
  signIn, signInByGoogle, registration
}