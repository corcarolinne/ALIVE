export const getChannels = (state) => state.following.channels

export const getFollowingButton = (state) => state.following.followingButton

export const getFollowingChannels = (state) => {
  const channels = getChannels(state)

  return channels.filter((item) => item.isFollowing)
}
