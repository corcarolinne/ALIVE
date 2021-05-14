import { MODULE_NAME } from './stateConstants'
import { requestActions } from '../../util'

/**
 * Actions constants
 */
export const GET_DATA = requestActions(MODULE_NAME, 'GET_DATA')
export const LOGIN = `${MODULE_NAME}/LOGIN`
export const LOGOUT = `${MODULE_NAME}/LOGOUT`
export const CHANGE_LOGIN_FIELD = `${MODULE_NAME}/CHANGE_LOGIN_FIELD`
export const CHANGE_PROFILE_FIELD = `${MODULE_NAME}/CHANGE_PROFILE_FIELD`
export const CHANGE_REGISTER_FIELD = `${MODULE_NAME}/CHANGE_REGISTER_FIELD`
export const FOLLOW_CHANNEL = requestActions(MODULE_NAME, 'FOLLOW_CHANNEL')
export const UNFOLLOW_CHANNEL = requestActions(MODULE_NAME, 'UNFOLLOW_CHANNEL')
export const CREATE_USER = requestActions(MODULE_NAME, 'CREATE_USER')
export const UPDATE_USER = requestActions(MODULE_NAME, 'UPDATE_USER')

/**
 * Action creators
 */

export const login = () => ({
  type: LOGIN,
})

export const logout = () => ({
  type: LOGOUT,
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
