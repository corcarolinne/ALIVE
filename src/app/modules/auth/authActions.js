/**
 * Actions constants
 */
export const LOGIN = 'auth/LOGIN'
export const CHANGE_LOGIN_FIELD = 'auth/CHANGE_LOGIN_FIELD'
export const CHANGE_PROFILE_FIELD = 'auth/CHANGE_PROFILE_FIELD'
export const CHANGE_REGISTER_FIELD = 'auth/CHANGE_REGISTER_FIELD'

/**
 * Action creators
 */

export const login = () => ({
  type: LOGIN,
})

export const changeLoginField = (field, value) => ({
  type: CHANGE_LOGIN_FIELD,
  payload: {
    field,
    value,
  },
})

export const changeProfileField = (field, value) => ({
  type: CHANGE_PROFILE_FIELD,
  payload: {
    field,
    value,
  },
})
export const changeRegisterField = (field, value) => ({
  type: CHANGE_REGISTER_FIELD,
  payload: {
    field,
    value,
  },
})
