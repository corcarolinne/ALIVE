import produce from 'immer'
import { getErrorsMessages, ERRORS } from './authConstants'
import * as actions from './authActions'

/**
 * Reducers
 */

const initialState = {
  server: 'http://34.242.219.210:4000/graphql',
  authToken: null,
  refreshToken: null,
  expiresIn: null,
  user: {
    firstName: 'Wagner',
    surname: 'Horta',
    displayName: 'whorta',
    password: 'pass123',
    dob: '03/10/1995',
    pronoun: 'masculine',
    avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
    bio: 'This is my channel. Enjoy!'
  },
  hasLoginFailed: false,
  loginTab: 0,
  signUpStep: 0,
  signUpError: null,
  alphaKeyInput: '',
}

export const reducer = produce((state = initialState, { type, payload, meta }) => {
  switch (type) {
  case actions.LOGIN.SUCCEEDED:
  case actions.RENEW.SUCCEEDED:
  case actions.SIGN_UP.SUCCEEDED: {
    const { token, refreshToken, expiresIn, user } = payload.data || {
      token: state.authToken,
      refreshToken: state.refreshToken,
      expiresIn: 3000,
      user: state.user,
    }

    state.authToken = token
    state.refreshToken = refreshToken
    state.expiresIn = expiresIn
    state.user = { ...user, dob: user.dob ? new Date(user.dob) : new Date('1995-10-03') }

    localStorage.setItem('authToken', token)
    localStorage.setItem('refreshToken', refreshToken)

    if (type === actions.SIGN_UP.SUCCEEDED) {
      state.signUpStep += 1
      state.signUpError = null
    }
    break
  }
  case actions.LOGIN.FAILED: {
    state.hasLoginFailed = true
    break
  }
  case actions.GET_USER.SUCCEEDED: {
    const user = payload.data
    state.user = { ...user, dob: user.dob ? new Date(user.dob) : new Date('1995-10-03') }
    break
  }
  case actions.UPDATE_PROFILE.SUCCEEDED: {
    if (!payload.args.firstName || !payload.args.surname || !payload.args.displayName || !payload.args.gender) {
      state.signUpError = ERRORS.FILL_REQUIRED_FIELD
    } else {
      state.signUpStep += 1
      state.signUpError = null
    }
    break
  }
  case actions.UPDATE_PAYMENT.SUCCEEDED: {
    state.signUpStep += 1
    state.signUpError = null
    break
  }

  case actions.SIGN_UP.FAILED:
  case actions.UPDATE_PROFILE.FAILED:
  case actions.UPDATE_PAYMENT.FAILED: {
    state.signUpError = getErrorsMessages(meta.graphQLErrors)
    break
  }
  case actions.SET_LOGIN_TAB: {
    state.loginTab = payload
    break
  }
  case actions.SET_SIGN_UP_STEP: {
    state.signUpStep = payload
    break
  }
  case actions.SET_USER: {
    state.user = {
      ...state.user,
      ...payload,
    }
    state.signUpError = null
    break
  }
  case actions.SET_ALPHA_KEY_INPUT: {
    state.alphaKeyInput = payload
    break
  }
  default:
    break
  }
  return state
})

export default reducer
