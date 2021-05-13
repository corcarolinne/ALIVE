/**
 * Selectors
 * http://jaysoo.ca/2016/02/28/organizing-redux-application/
 */
import { get } from 'lodash/fp'
import { MODULE_NAME } from './authConstants'

export const getUser = get([MODULE_NAME, 'user'])
export const getRegisterValues = (state) => state.auth.register
export const getLoginValues = (state) => state.auth.login
