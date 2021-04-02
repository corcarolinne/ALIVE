import produce from 'immer'
// import * as actions from './followingActions'

/**
 * Reducers
 */

const initialState = {
  channels: [
    {
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
    },
    {
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
    },
    {
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
    },
    {
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
    },
    {
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
    },
    {
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
    },
    {
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
    },
    {
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
    },
  ],
}

export const reducer = produce((state = initialState, action) => {
  switch (action.type) {
  default:
    return state
  }
})

export default reducer
