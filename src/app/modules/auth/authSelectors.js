/**
 * Selectors
 * http://jaysoo.ca/2016/02/28/organizing-redux-application/
 */
import { createSelector } from 'reselect'
import { get } from 'lodash/fp'
import { MODULE_NAME, ERRORS } from './authConstants'

export const getAuth = get([MODULE_NAME])
export const getAuthToken = get([MODULE_NAME, 'authToken'])
export const getRefreshToken = get([MODULE_NAME, 'refreshToken'])
export const getExpiresIn = get([MODULE_NAME, 'expiresIn'])
export const hasLoginFailed = get([MODULE_NAME, 'hasLoginFailed'])
export const getUser = get([MODULE_NAME, 'user'])
export const getLoginTab = get([MODULE_NAME, 'loginTab'])
export const getSignUpStep = get([MODULE_NAME, 'signUpStep'])
export const getSignUpError = get([MODULE_NAME, 'signUpError'])

export const isUserCreator = createSelector(
  getUser, //
  ({ role }) => role === 'creator'
)

export const getCreateAccountError = createSelector(
  getUser, //
  getSignUpError,
  (user, signupError) => {
    if (signupError) {
      return signupError
    }

    if (user.password && (user.password.length < 8 || !/[a-z]/.test(user.password) || !/[A-Z]/.test(user.password))) {
      return ERRORS.PASSWORD_VALIDATION
    }

    if (user.passwordConfirmation && user.passwordConfirmation !== user.password) {
      return ERRORS.PASSWORD_CONFIRMATION
    }

    return ''
  }
)

export const getPersonalDetailsError = createSelector(
  getSignUpError, //
  (signupError) => {
    if (signupError) {
      return signupError
    }
    return ''
  }
)

export const hasSignUpError = createSelector(
  getCreateAccountError, //
  getPersonalDetailsError,
  (createAccountError, personalDetailsError) => createAccountError !== '' || personalDetailsError !== ''
)

export const isAuthenticated = createSelector(
  getAuthToken, //
  getRefreshToken,
  getExpiresIn,
  (authToken, refreshToken) => {
    const hasAuthToken = !!(authToken || localStorage.getItem('authToken'))
    const hasRefreshToken = !!(refreshToken || localStorage.getItem('refreshToken'))

    return hasAuthToken && hasRefreshToken
  }
)
