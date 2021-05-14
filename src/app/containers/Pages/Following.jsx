import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Grid } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
import ChannelItem from '../../components/ChannelItem'

import modules from '../../modules'
import api from '../../graphql'

const Following = ({ followingChannels, requestApiCall, user }) => {
  const handleUnfollow = (channelId) => (event) => {
    event.preventDefault()
    if (user?.id) {
      requestApiCall(
        api.callNames.unfollowUser,
        {
          userId: user.id,
          userToUnfollow: channelId,
        },
        modules.state.actions.UNFOLLOW_CHANNEL
      )
    }
  }

  return (
    <SimplePage title="Following">
      <Grid container alignItems="center" justify="center" spacing={5}>
        {followingChannels.map((item) => (
          <Grid item xs={3}>
            <ChannelItem avatar={item.avatar} channelName={item.displayName} isFollowing onUnfollow={handleUnfollow(item.id)} />
          </Grid>
        ))}
      </Grid>
    </SimplePage>
  )
}

Following.propTypes = {
  user: PropTypes.object.isRequired,
  followingChannels: PropTypes.array.isRequired,
  requestApiCall: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  user: modules.state.selectors.getUser,
  followingChannels: modules.state.selectors.getFollowingChannels,
})

const mapDispatchToProps = {
  requestApiCall: modules.connectivity.actions.requestApiCall,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Following))
