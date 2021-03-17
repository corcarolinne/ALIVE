import { MODULE_NAME } from './authConstants'
import { requestActions } from '../../util'

/**
 * Actions constants
 */
export const LOGIN = requestActions(MODULE_NAME, 'LOGIN')
export const GET_USER = requestActions(MODULE_NAME, 'GET_USER')
export const RENEW = requestActions(MODULE_NAME, 'RENEW')
export const LOGOUT = requestActions(MODULE_NAME, 'LOGOUT')
export const SIGN_UP = requestActions(MODULE_NAME, 'SIGN_UP')
export const UPDATE_PROFILE = requestActions(MODULE_NAME, 'UPDATE_PROFILE')
export const UPDATE_PAYMENT = requestActions(MODULE_NAME, 'UPDATE_PAYMENT')
export const CREATE_IMAGE = requestActions(MODULE_NAME, 'CREATE_IMAGE')
export const UPLOAD_IMAGE = requestActions(MODULE_NAME, 'UPLOAD_IMAGE')
export const SET_USER = `${MODULE_NAME}/SET_USER`
export const SET_LOGIN_TAB = `${MODULE_NAME}/SET_LOGIN_TAB`
export const SET_SIGN_UP_STEP = `${MODULE_NAME}/SET_SIGN_UP_STEP`
export const AFTER_LOGIN_GO_TO = `${MODULE_NAME}/AFTER_LOGIN_GO_TO`
export const RESET_AUTH_REDUCER_STATE = `${MODULE_NAME}/RESET_AUTH_REDUCER_STATE`
export const SET_ALPHA_KEY_INPUT = `${MODULE_NAME}/SET_ALPHA_KEY_INPUT`

/**
 * Action creators
 */
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
})

export const setLoginTab = (loginTab) => ({
  type: SET_LOGIN_TAB,
  payload: loginTab,
})

export const setSignUpStep = (signUpStep) => ({
  type: SET_SIGN_UP_STEP,
  payload: signUpStep,
})

export const resetAuthReducer = () => ({
  type: RESET_AUTH_REDUCER_STATE,
})

export const setAlphaKeyInput = (payload) => ({
  type: SET_ALPHA_KEY_INPUT,
  payload,
})
