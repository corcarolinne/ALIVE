import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Grid } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
import Thumbnail from '../../components/Thumbnail'
import MainPlayer from '../../components/MainPlayer'

import modules from '../../modules'
import api from '../../graphql'

const Home = ({ user, mainLive, lives, requestApiCall }) => {
  const handleFollow = (event) => {
    event.preventDefault()
    if (user?.id) {
      requestApiCall(
        api.callNames.followUser,
        {
          userId: user?.id,
          userToFollow: mainLive?.id,
        },
        modules.state.actions.FOLLOW_CHANNEL
      )
    }
  }

  const handleUnfollow = (event) => {
    event.preventDefault()
    if (user?.id) {
      requestApiCall(
        api.callNames.unfollowUser,
        {
          userId: user.id,
          userToUnfollow: mainLive?.id,
        },
        modules.state.actions.UNFOLLOW_CHANNEL
      )
    }
  }

  return (
    <SimplePage>
      <Grid
        style={{
          marginTop: 20,
        }}
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={5}
      >
        <Grid item>
          <MainPlayer
            channelId={mainLive?.id}
            uri={mainLive?.live?.uri}
            avatar={mainLive?.avatar}
            title={mainLive?.displayName}
            viewersNumber={mainLive?.following?.length}
            isFollowing={user?.following?.includes(mainLive?.id)}
            thumbnail={mainLive?.live?.image}
            onFollow={handleFollow}
            onUnfollow={handleUnfollow}
          />
        </Grid>

        <Grid item style={{ width: '100%' }}>
          <Grid container style={{ width: '100%' }} spacing={3} justify="center">
            {lives.map((item) => (
              <Grid key={item.channelId} item xs={12} sm={4}>
                <Thumbnail avatar={item?.avatar} title={item?.displayName} image={item?.live?.image} channelId={item?.id} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SimplePage>
  )
}

Home.propTypes = {
  user: PropTypes.object.isRequired,
  mainLive: PropTypes.object.isRequired,
  lives: PropTypes.array.isRequired,
  requestApiCall: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  user: modules.state.selectors.getUser,
  mainLive: modules.state.selectors.getMainLive,
  lives: modules.state.selectors.getLives,
})

const mapDispatchToProps = {
  requestApiCall: modules.connectivity.actions.requestApiCall,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Home))
