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
    },
    {
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
      title: 'live 1',
    },
    {
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
      title: 'live 1',
    },
    {
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
      title: 'live 1',
    },
    {
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
      title: 'live 1',
    },
    {
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
      title: 'live 1',
    },
  ],
}

export const reducer = produce((state = initialState, action) => {
  switch (action.type) {
    case actions.SET_EX: {
      state.ex = action.payload
      break
    }
    default:
      return state
  }
  return state
})

export default reducer
