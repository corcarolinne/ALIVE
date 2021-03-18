import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { CardContent, Button, Grid, Card, Typography, Avatar, makeStyles } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
// import Thumbnail from '../../components/Thumbnail'
import MainPlayer from '../../components/MainPlayer'

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

const Channel = () => {
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
            uri="https://d35xptopo3stpj.cloudfront.net/10f57900-5cba-4545-9b7d-01838e4b0360/dash/9fba20c0c15d73e0_9ca2485b42f2f3a1.mpd"
            avatar="https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979"
            title="Live Title"
            viewersNumber="12,890"
            hideChannelInfo
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
                  Channel Name
                </Typography>
                <Typography variant="body1" className={classes.channelBio}>
                  (Bio Goes Here) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo
                  sagittis, sapien dui mattis dui.
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" className={classes.followButton} color="secondary">
                  Follow
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SimplePage>
  )
}

Channel.propTypes = {}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Channel))
