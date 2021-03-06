import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Button, Grid, Typography, Avatar, makeStyles } from '@material-ui/core'
import { identity } from 'lodash'

const useStyles = makeStyles((theme) => ({
  channelItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  channelName: {
    marginBottom: '10px',
  },
  channelAvatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    marginBottom: '20px',
  },
  unfollowButton: {
    backgroundColor: theme.palette.primary.text,
  },
}))

const ChannelItem = ({ avatar, channelName, onClick, isFollowing, onFollow, onUnfollow }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.channelItem} onClick={onClick}>
      <Avatar className={classes.channelAvatar} src={avatar} />
      <Grid item>
        <Typography variant="subtitle1" className={classes.channelName}>
          {channelName}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={classes.unfollowButton}
          color="secondary"
          onClick={isFollowing ? onUnfollow : onFollow}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </Button>
      </Grid>
    </Grid>
  )
}

ChannelItem.propTypes = {
  onClick: PropTypes.func,
  avatar: PropTypes.string,
  channelName: PropTypes.string,
  isFollowing: PropTypes.string,
  onFollow: PropTypes.func,
  onUnfollow: PropTypes.func,
}

ChannelItem.defaultProps = {
  onClick: identity,
  avatar: '',
  channelName: '',
  isFollowing: '',
  onFollow: () => {},
  onUnfollow: () => {},
}

export default memo(ChannelItem)
