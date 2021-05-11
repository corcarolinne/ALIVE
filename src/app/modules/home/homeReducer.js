import produce from 'immer'
import * as actions from './homeActions'

/**
 * Reducers
 */

const initialState = {
  lives: [
    {
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
      title: 'live 1',
      channelId: 'aa',
    },
    {
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
      title: 'live 1',
      channelId: 'bb',
    },
    {
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
      title: 'live 1',
      channelId: 'cc',
    },
    {
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
      title: 'live 1',
      channelId: 'dd',
    },
    {
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
      title: 'live 1',
      channelId: 'ee',
    },
    {
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
      title: 'live 1',
      channelId: 'ff',
    },
  ],
  register: {
    email: '',
    userName: '',
    password: '',
  },
}

export const reducer = produce((state = initialState, action) => {
  switch (action.type) {
    case actions.SET_EX: {
      state.ex = action.payload
      break
    }
    case actions.CHANGE_REGISTER_FIELD: {
      state.register[action.payload.field] = action.payload.value
      break
    }
    default:
      return state
  }
  return state
})

export default reducer
