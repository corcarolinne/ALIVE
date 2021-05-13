import produce from 'immer'
import * as actions from './channelActions'

/**
 * Reducers
 */

const initialState = {
  live: {
    uri: 'https://d35xptopo3stpj.cloudfront.net/10f57900-5cba-4545-9b7d-01838e4b0360/dash/9fba20c0c15d73e0_9ca2485b42f2f3a1.mpd',
    image: 'http://i3.ytimg.com/vi/bV2lzpk3O04/maxresdefault.jpg',
    title: 'live title',
    viewersNumber: 10234,
    hideChannelInfo: false,
    channel: {
      id: 1,
      channelName: 'Channel Name',
      avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
      isFollowing: true,
      bio:
        '(Bio Goes Here) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui.',
    },
  },
}

export const reducer = produce((state = initialState, action) => {
  switch (action.type) {
    case actions.FOLLOW_CHANNEL: {
      state.live.channel.isFollowing = true
      break
    }
    case actions.UNFOLLOW_CHANNEL: {
      state.live.channel.isFollowing = false
      break
    }

    default:
      return state
  }
  return state
})

export default reducer
