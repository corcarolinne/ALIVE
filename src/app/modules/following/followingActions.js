// type
export const UNFOLLOW_CHANNEL = 'following/UNFOLLOW_CHANNEL'

// creator
export const unfollowChannel = (channelId) => ({
  type: UNFOLLOW_CHANNEL,
  payload: channelId,
})
