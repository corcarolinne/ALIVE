import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  picInPicButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent',
    },
    '&:hover > span > $picInPic': {
      stroke: theme.palette.secondary.main,
    },
    '&:hover > span > $picInPic > g > $picInPicMiniRect': {
      fill: theme.palette.secondary.main,
    },
  },
  picInPic: {
    stroke: theme.palette.grey.default,
  },
  picInPicMiniRect: {
    fill: theme.palette.grey.default,
  },
}))

const PicInPicIconButton = (props) => {
  const classes = useStyles()

  return (
    <IconButton className={classes.picInPicButton} {...props} disableFocusRipple disableRipple>
      <svg className={classes.picInPic} xmlns="http://www.w3.org/2000/svg" width="33" height="24" viewBox="0 0 33 24">
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
          <rect width="31" height="22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" rx="2.667" />
          <rect className={classes.picInPicMiniRect} width="11" height="7" x="16" y="11" rx="2" />
        </g>
      </svg>
    </IconButton>
  )
}

export default memo(PicInPicIconButton)
