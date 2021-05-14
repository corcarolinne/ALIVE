/**
 * Selectors
 * http://jaysoo.ca/2016/02/28/organizing-redux-application/
 */
import tail from 'lodash/tail'
import { get } from 'lodash/fp'
import { MODULE_NAME } from './stateConstants'

// auth
export const getUser = get([MODULE_NAME, 'user'])
export const getRegisterValues = (state) => state[MODULE_NAME].register
export const getLoginValues = (state) => state[MODULE_NAME].login

// home
export const getMainLive = (state) => state[MODULE_NAME].data[0] || {}
export const getLives = (state) => tail(state[MODULE_NAME].data)

// channel
export const getChannel = (state) => (userId) => state[MODULE_NAME].data.find((item) => item.id === userId)
export const getFollowingChannels = () => []
