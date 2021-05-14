import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Grid } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
import Thumbnail from '../../components/Thumbnail'
import MainPlayer from '../../components/MainPlayer'

import modules from '../../modules'

const Home = ({ user, mainLive, lives, follow, unfollow }) => (
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
          onFollow={(event) => {
            event.preventDefault()
            follow(mainLive?.id)
          }}
          onUnfollow={(event) => {
            event.preventDefault()
            unfollow(mainLive?.id)
          }}
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

Home.propTypes = {
  user: PropTypes.object.isRequired,
  mainLive: PropTypes.object.isRequired,
  lives: PropTypes.array.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  user: modules.state.selectors.getUser,
  mainLive: modules.state.selectors.getMainLive,
  lives: modules.state.selectors.getLives,
})

const mapDispatchToProps = {
  follow: modules.state.actions.followChannel,
  unfollow: modules.state.actions.unfollowChannel,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Home))
