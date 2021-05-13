import produce from 'immer'
import * as actions from './homeActions'

/**
 * Reducers
 */

const initialState = {
  lives: [
    {
      uri: 'https://b43189d95416.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.248056333272.channel.X3k9AgkWFOnT.m3u8',
      image:
        'https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/110202748_114186017041375_3516819019169033276_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=4NeaVTtcN2QAX_Df_R0&_nc_ht=scontent-dub4-1.xx&oh=ce9ddd7b4b72556f6aa289c2b9fc363e&oe=60C3BE38',
      title: 'live title',
      viewersNumber: 10234,
      hideChannelInfo: false,
      channel: {
        id: 1,
        channelName: 'Channel Name',
        avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
        isFollowing: true,
      },
    },
    {
      uri: 'https://b43189d95416.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.248056333272.channel.X3k9AgkWFOnT.m3u8',
      image:
        'https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/110202748_114186017041375_3516819019169033276_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=4NeaVTtcN2QAX_Df_R0&_nc_ht=scontent-dub4-1.xx&oh=ce9ddd7b4b72556f6aa289c2b9fc363e&oe=60C3BE38',
      title: 'live 2',
      viewersNumber: 10234,
      hideChannelInfo: false,
      channel: {
        id: 2,
        channelName: 'Channel Name',
        avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
        isFollowing: true,
      },
    },
    {
      uri: 'https://b43189d95416.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.248056333272.channel.X3k9AgkWFOnT.m3u8',
      image:
        'https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/110202748_114186017041375_3516819019169033276_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=4NeaVTtcN2QAX_Df_R0&_nc_ht=scontent-dub4-1.xx&oh=ce9ddd7b4b72556f6aa289c2b9fc363e&oe=60C3BE38',
      title: 'live 3',
      viewersNumber: 10234,
      hideChannelInfo: false,
      channel: {
        id: 3,
        channelName: 'Channel Name',
        avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
        isFollowing: true,
      },
    },
    {
      uri: 'https://b43189d95416.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.248056333272.channel.X3k9AgkWFOnT.m3u8',
      image:
        'https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/110202748_114186017041375_3516819019169033276_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=4NeaVTtcN2QAX_Df_R0&_nc_ht=scontent-dub4-1.xx&oh=ce9ddd7b4b72556f6aa289c2b9fc363e&oe=60C3BE38',
      title: 'live 4',
      viewersNumber: 10234,
      hideChannelInfo: false,
      channel: {
        id: 4,
        channelName: 'Channel Name',
        avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
        isFollowing: true,
      },
    },
  ],
}

export const reducer = produce((state = initialState, action) => {
  switch (action.type) {
    case actions.FOLLOW_CHANNEL: {
      const indexOfLiveToFollowChannel = state.lives.findIndex((live) => live.id === action.payload)
      state.lives[indexOfLiveToFollowChannel].channel.isFollowing = true
      break
    }
    case actions.UNFOLLOW_CHANNEL: {
      const indexOfLiveToUnfollowChannel = state.lives.findIndex((live) => live.id === action.payload)
      state.lives[indexOfLiveToUnfollowChannel].channel.isFollowing = false
      break
    }

    default:
      return state
  }
  return state
})

export default reducer
