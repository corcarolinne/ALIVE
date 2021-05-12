import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Grid } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
import ChannelItem from '../../components/ChannelItem'

import modules from '../../modules'

const Following = ({ followingChannels, unfollow }) => (
  <SimplePage title="Following">
    <Grid container alignItems="center" justify="center" spacing={5}>
      {followingChannels.map((item) => (
        <Grid item xs={3}>
          <ChannelItem
            avatar={item.avatar}
            channelName={item.channelName}
            isFollowing={item.isFollowing}
            onUnfollow={() => unfollow(item.id)}
          />
        </Grid>
      ))}
    </Grid>
  </SimplePage>
)

Following.propTypes = {
  followingChannels: PropTypes.array.isRequired,
  unfollow: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  followingChannels: modules.following.selectors.getFollowingChannels,
})

const mapDispatchToProps = {
  unfollow: modules.following.actions.unfollowChannel,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Following))
