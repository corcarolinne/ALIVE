import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { CardContent, Button, Grid, Card, Typography, Avatar, makeStyles } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
// import Thumbnail from '../../components/Thumbnail'
import MainPlayer from '../../components/MainPlayer'

import modules from '../../modules'
import api from '../../graphql'

const useStyles = makeStyles((theme) => ({
  gridItem: {
    width: '100%',
  },
  channelInfo: {
    display: 'flex',
    padding: theme.spacing(4, 10),
  },
  channelName: {
    padding: theme.spacing(2, 3),
  },
  channelBio: {
    padding: theme.spacing(0, 3),
    width: '75%',
  },
  channelAvatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  followButton: {
    margin: theme.spacing(6, 3),
  },
}))

const Channel = ({ user, requestApiCall, getChannel, location }) => {
  const classes = useStyles()

  const channel = getChannel(location.pathname.replace('/channel/', ''))

  const isFollowing = user?.following?.includes(channel?.id)

  const handleFollow = (event) => {
    event.preventDefault()
    if (user?.id) {
      requestApiCall(
        api.callNames.followUser,
        {
          userId: user?.id,
          userToFollow: channel?.id,
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
          userToUnfollow: channel?.id,
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
            channelId={channel?.id}
            uri={channel?.live?.uri}
            avatar={channel?.avatar}
            title={channel?.displayName}
            viewersNumber={channel?.following?.length}
            isFollowing={isFollowing}
            thumbnail={channel?.live?.image}
            onFollow={handleFollow}
            onUnfollow={handleUnfollow}
          />
        </Grid>
        <Grid item className={classes.gridItem}>
          <Card>
            <CardContent className={classes.channelInfo}>
              <Avatar className={classes.channelAvatar} src={channel?.avatar} />
              <Grid item>
                <Typography variant="h4" className={classes.channelName}>
                  {channel?.displayName}
                </Typography>
                <Typography variant="body1" className={classes.channelBio}>
                  {channel?.bio}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.followButton}
                  color="secondary"
                  onClick={isFollowing ? handleUnfollow : handleFollow}
                >
                  {isFollowing ? 'Unfollow' : 'Follow'}
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SimplePage>
  )
}

Channel.propTypes = {
  user: PropTypes.object.isRequired,
  getChannel: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  requestApiCall: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  user: modules.state.selectors.getUser,
  getChannel: modules.state.selectors.getChannel,
  location: modules.router.selectors.getLocation,
})

const mapDispatchToProps = {
  requestApiCall: modules.connectivity.actions.requestApiCall,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Channel))
