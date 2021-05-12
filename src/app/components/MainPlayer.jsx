import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, CardActionArea, Typography, Button, Avatar, Box } from '@material-ui/core'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import { NavLink } from 'react-router-dom'

import ShakaPlayer from './ShakaPlayer'

const useStyles = makeStyles(() => ({
  avatar: {
    marginRight: '10px',
  },
  numberOfViewers: {
    marginRight: '10px',
  },
}))

const MainPlayer = ({ channelId, uri, avatar, title, viewersNumber, hideChannelInfo, isFollowing, onFollow, onUnfollow }) => {
  const classes = useStyles()
  const enableVideoClick = channelId !== ''
  const Wrapper = enableVideoClick ? NavLink : Box
  return (
    <Card>
      <Wrapper
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
        to={`/channel/${channelId}`}
      >
        <CardActionArea>
          <ShakaPlayer uri={uri} width="100%" isPlaying isMuted />
          {!hideChannelInfo && (
            <CardContent>
              <Grid container alignItems="center" justify="space-between">
                <Grid container item xs={8} alignItems="center">
                  <Avatar src={avatar} className={classes.avatar} />
                  <Typography variant="h5" component="h2">
                    {title}
                  </Typography>
                </Grid>
                <Grid container item xs={3} justify="flex-end" alignItems="center">
                  <Grid container item xs={4} className={classes.numberOfViewers}>
                    <PeopleAltOutlinedIcon />
                    <Typography>{viewersNumber}</Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="secondary" onClick={isFollowing ? onUnfollow : onFollow}>
                      {isFollowing ? 'Unfollow' : 'Follow'}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          )}
        </CardActionArea>
      </Wrapper>
    </Card>
  )
}

MainPlayer.propTypes = {
  channelId: PropTypes.string,
  uri: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
  viewersNumber: PropTypes.string,
  hideChannelInfo: PropTypes.bool,
  isFollowing: PropTypes.string,
  onFollow: PropTypes.func,
  onUnfollow: PropTypes.func,
}
MainPlayer.defaultProps = {
  channelId: '',
  uri: '',
  avatar: '',
  title: '',
  viewersNumber: '',
  hideChannelInfo: false,
  isFollowing: '',
  onFollow: () => {},
  onUnfollow: () => {},
}
export default memo(MainPlayer)
