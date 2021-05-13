import produce from 'immer'
import * as actions from './authActions'

/**
 * Reducers
 */

const initialState = {
  server: 'http://34.242.219.210:4000/graphql',
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
      if (state.login.username === 'whorta' && state.login.password === 'pass123') {
        state.user = {
          firstName: 'Wagner',
          surname: 'Horta',
          displayName: 'whorta',
          password: 'pass123',
          dob: '03/10/1995',
          pronoun: 'masculine',
          avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
          bio: 'This is my channel. Enjoy!',
        }
      }
      break
    }
    default:
      break
  }
  return state
})

export default reducer
