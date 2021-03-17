import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  fullScreenIconButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent',
    },
    '&:hover > span > $fullScreenIcon': {
      stroke: theme.palette.secondary.main,
    },
  },
  fullScreenIcon: {
    stroke: theme.palette.grey.default,
  },
}))

const FullScreenIconButton = ({ isActive, ...props }) => {
  const classes = useStyles()

  return (
    <IconButton className={classes.fullScreenIconButton} {...props} disableFocusRipple disableRipple>
      <svg className={classes.fullScreenIcon} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
        {isActive ? (
          <path
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 7.667h4A2.667 2.667 0 0 0 7.667 5V1m10.666 0v4A2.667 2.667 0 0 0 21 7.667h4m0 10.666h-4A2.667 2.667 0 0 0 18.333 21v4M7.667 25v-4A2.667 2.667 0 0 0 5 18.333H1"
          />
        ) : (
          <path
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7.667 1h-4A2.667 2.667 0 0 0 1 3.667v4m24 0v-4A2.667 2.667 0 0 0 22.333 1h-4m0 24h4A2.667 2.667 0 0 0 25 22.333v-4m-24 0v4A2.667 2.667 0 0 0 3.667 25h4"
          />
        )}
      </svg>
    </IconButton>
  )
}

FullScreenIconButton.propTypes = {
  isActive: PropTypes.bool,
}

FullScreenIconButton.defaultProps = {
  isActive: false,
}

export default memo(FullScreenIconButton)
