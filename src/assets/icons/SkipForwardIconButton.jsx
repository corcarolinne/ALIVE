import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  skipForwardIconButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent',
    },
    '&:hover > span > svg > $skipFowardIcon': {
      stroke: theme.palette.secondary.main,
    },
  },
  skipFowardIcon: {
    stroke: theme.palette.grey.default,
  },
}))

const ShareIcon = (props) => {
  const classes = useStyles()

  return (
    <IconButton className={classes.skipForwardIconButton} {...props} disableFocusRipple disableRipple>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18">
        <g
          className={classes.skipFowardIcon}
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M1 1l10 8-10 8zM15 2v14" />
        </g>
      </svg>
    </IconButton>
  )
}

export default memo(ShareIcon)
