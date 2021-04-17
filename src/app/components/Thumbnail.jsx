import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Card, CardContent, CardActionArea, Typography, CardMedia, Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    width: '334px',
  },
  avatar: {
    marginRight: '10px',
  },
  image: {
    height: '170px',
  },
}))

const Thumbnail = ({ channelId, image, avatar, title }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <NavLink
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
        to={`/channel/${channelId}`}
      >
        <CardActionArea>
          <CardMedia className={classes.image} image={image} />
          <CardContent>
            <Grid container alignItems="center">
              <Avatar src={avatar} className={classes.avatar} />
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
      </NavLink>
    </Card>
  )
}

Thumbnail.propTypes = {
  channelId: PropTypes.string,
  image: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
}

Thumbnail.defaultProps = {
  channelId: '',
  image: '',
  avatar: '',
  title: '',
}

export default memo(Thumbnail)
