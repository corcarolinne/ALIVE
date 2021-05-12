// type
export const FOLLOW_CHANNEL = 'home/FOLLOW_CHANNEL'
export const UNFOLLOW_CHANNEL = 'home/UNFOLLOW_CHANNEL'

// creator
export const followChannel = (value) => ({
  type: FOLLOW_CHANNEL,
  payload: value,
})

export const unfollowChannel = (value) => ({
  type: UNFOLLOW_CHANNEL,
  payload: value,
})
