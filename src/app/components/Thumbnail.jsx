import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Card, CardContent, CardActionArea, Typography, CardMedia, Avatar } from '@material-ui/core'

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

const Thumbnail = ({ image, avatar, title }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
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
    </Card>
  )
}

Thumbnail.propTypes = {
  image: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
}

Thumbnail.defaultProps = {
  image: '',
  avatar: '',
  title: '',
}

export default memo(Thumbnail)
