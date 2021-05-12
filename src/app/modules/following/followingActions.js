// type
export const FOLLOW_CHANNEL = 'following/FOLLOW_CHANNEL'
export const UNFOLLOW_CHANNEL = 'following/UNFOLLOW_CHANNEL'

// creator
export const followChannel = (channelId) => ({
  type: FOLLOW_CHANNEL,
  payload: channelId,
})

// creator
export const unfollowChannel = (channelId) => ({
  type: UNFOLLOW_CHANNEL,
  payload: channelId,
})
