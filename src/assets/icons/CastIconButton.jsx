import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  castIconButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent',
    },
    '&:hover > span > $castIcon': {
      stroke: theme.palette.secondary.main,
    },
  },
  castIcon: {
    stroke: theme.palette.grey.default,
  },
}))

const CastIconButton = (props) => {
  const classes = useStyles()

  return (
    <IconButton className={classes.castIconButton} {...props} disableFocusRipple disableRipple>
      <svg className={classes.castIcon} xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24">
        <path
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 17.594a6.857 6.857 0 0 1 5.349 5.349M1 12.04a12.343 12.343 0 0 1 10.903 10.903M1 6.486V3.743A2.743 2.743 0 0 1 3.743 1h21.943a2.743 2.743 0 0 1 2.743 2.743V20.2a2.743 2.743 0 0 1-2.743 2.743h-8.229"
        />
      </svg>
    </IconButton>
  )
}

export default memo(CastIconButton)
