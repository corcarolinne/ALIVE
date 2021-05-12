import produce from 'immer'
import * as actions from './followingActions'

/**
 * Reducers
 */

const initialState = {
  channels: [
    {
      id: 1,
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      isFollowing: true,
    },
    {
      id: 2,
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      isFollowing: false,
    },
    {
      id: 3,
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      isFollowing: true,
    },
    {
      id: 4,
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      isFollowing: false,
    },
    {
      id: 5,
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      isFollowing: false,
    },
    {
      id: 6,
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      isFollowing: false,
    },
    {
      id: 7,
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      isFollowing: false,
    },
    {
      id: 8,
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      isFollowing: false,
    },
  ],
}

export const reducer = produce((state = initialState, action) => {
  switch (action.type) {
    case actions.UNFOLLOW_CHANNEL: {
      const indexOfUnfollowedChannel = state.channels.findIndex((channel) => channel.id === action.payload)
      state.channels[indexOfUnfollowedChannel].isFollowing = false
      break
    }
    default:
      return state
  }
  return state
})

export default reducer
