import produce from 'immer'
import * as actions from './stateActions'

const convertCreatedUser = (item) => ({
  id: item.user_id,
  firstName: item.firstname,
  surname: item.surname,
  displayName: item.displayName,
  username: item.displayName,
  password: item.password,
  dob: item.dob,
  avatar: item.avatar,
  bio: item.bio,
  following: item.following,
  live: {
    uri: item.live_uri,
    image: item.live_image,
  },
  obs_config: {
    rmrpLink: item.obs_config_rmrplink,
    streamKey: item.obs_config_streamkey,
  },
})

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

    case actions.LOGOUT: {
      state.user = null
      break
    }

    case actions.FOLLOW_CHANNEL.REQUESTED: {
      if (state.user) {
        state.user.following.push(payload.args.userToFollow)
      }
      break
    }
    case actions.UNFOLLOW_CHANNEL.REQUESTED: {
      if (state.user) {
        state.user.following = (state.user.following || []).filter((item) => item !== payload.args.userToUnfollow)
      }
      break
    }
    case actions.CREATE_USER.REQUESTED: {
      state.data.push(convertCreatedUser(payload.args.registerValues))
      break
    }
    default:
      break
  }
  return state
})

export default reducer
