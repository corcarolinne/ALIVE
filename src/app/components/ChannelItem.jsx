import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Button, Grid, Typography, Avatar, makeStyles } from '@material-ui/core'

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

const ChannelItem = ({ avatar, channelName }) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.channelItem}>
      <Avatar className={classes.channelAvatar} src={avatar} />
      <Grid item>
        <Typography variant="subtitle1" className={classes.channelName}>
          {channelName}
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.unfollowButton} color="secondary">
          Unfollow
        </Button>
      </Grid>
    </Grid>
  )
}

ChannelItem.propTypes = {
  avatar: PropTypes.string,
  channelName: PropTypes.string,
}

ChannelItem.defaultProps = {
  avatar: '',
  channelName: '',
}

export default memo(ChannelItem)
