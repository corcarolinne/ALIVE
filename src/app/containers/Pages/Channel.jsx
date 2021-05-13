import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { CardContent, Button, Grid, Card, Typography, Avatar, makeStyles } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
// import Thumbnail from '../../components/Thumbnail'
import MainPlayer from '../../components/MainPlayer'

import modules from '../../modules'

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

const Channel = ({ unfollow, follow, live }) => {
  const classes = useStyles()

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
            channelId={live.id}
            uri={live.uri}
            avatar={live.channel.avatar}
            title={live.title}
            viewersNumber={live.viewersNumber}
            isFollowing={live.channel.isFollowing}
            onFollow={() => follow(live.id)}
            onUnfollow={() => unfollow(live.id)}
          />
        </Grid>
        <Grid item className={classes.gridItem}>
          <Card>
            <CardContent className={classes.channelInfo}>
              <Avatar
                className={classes.channelAvatar}
                src="https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979"
              />
              <Grid item>
                <Typography variant="h4" className={classes.channelName}>
                  {live.channel.channelName}
                </Typography>
                <Typography variant="body1" className={classes.channelBio}>
                  {live.channel.bio}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.followButton}
                  color="secondary"
                  onClick={live.channel.isFollowing ? unfollow : follow}
                >
                  {live.channel.isFollowing ? 'Unfollow' : 'Follow'}
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
  live: PropTypes.object.isRequired,
  unfollow: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  live: modules.channel.selectors.getLive,
})

const mapDispatchToProps = {
  unfollow: modules.channel.actions.unfollowChannel,
  follow: modules.channel.actions.followChannel,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Channel))
