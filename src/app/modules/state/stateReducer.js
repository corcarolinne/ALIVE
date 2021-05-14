import produce from 'immer'
import * as actions from './stateActions'

/**
 * Reducers
 */

const initialState = {
  data: [],
  user: null,
  register: {
    email: '',
    userName: '',
    password: '',
  },
  login: {
    userName: '',
    password: '',
  },
}

export const reducer = produce((state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_DATA.SUCCEEDED: {
      state.data = payload.data
      break
    }
    case actions.CHANGE_REGISTER_FIELD: {
      state.register[payload.field] = payload.value
      break
    }
    case actions.CHANGE_LOGIN_FIELD: {
      state.login[payload.field] = payload.value
      break
    }
    case actions.CHANGE_PROFILE_FIELD: {
      state.user[payload.field] = payload.value
      break
    }
    case actions.LOGIN: {
      const user = state.data.find((item) => state.login.username === item.displayName && state.login.password === item.password)
      if (user) {
        state.user = user
      }
      break
    }

    case actions.FOLLOW_CHANNEL: {
      if (state.user) {
        state.user.following.push(payload)
      }
      break
    }
    case actions.UNFOLLOW_CHANNEL: {
      if (state.user) {
        state.user.following = (state.user.following || []).filter((item) => item !== payload)
      }
      break
    }
    default:
      break
  }
  return state
})

export default reducer
