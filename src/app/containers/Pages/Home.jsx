import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Grid } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
import Thumbnail from '../../components/Thumbnail'
import MainPlayer from '../../components/MainPlayer'

import modules from '../../modules'

const Home = ({ mainLive, lives, follow, unfollow }) => (
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
          channelId={mainLive.id}
          uri={mainLive.uri}
          avatar={mainLive.channel.avatar}
          title={mainLive.title}
          viewersNumber={mainLive.viewersNumber}
          isFollowing={mainLive.channel.isFollowing}
          thumbnail={mainLive.image}
          onFollow={() => follow(mainLive.id)}
          onUnfollow={() => unfollow(mainLive.id)}
        />
      </Grid>

      <Grid item>
        <Grid container spacing={3} justify="center">
          {lives.map((item) => (
            <Grid key={item.channelId} item xs={12} sm={4}>
              <Thumbnail avatar={item.channel.avatar} title={item.title} image={item.image} channelId={item.channel.id} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </SimplePage>
)

Home.propTypes = {
  mainLive: PropTypes.object.isRequired,
  lives: PropTypes.array.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  mainLive: modules.home.selectors.getMainLive,
  lives: modules.home.selectors.getLives,
})

const mapDispatchToProps = {
  follow: modules.home.actions.followChannel,
  unfollow: modules.home.actions.unfollowChannel,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Home))
