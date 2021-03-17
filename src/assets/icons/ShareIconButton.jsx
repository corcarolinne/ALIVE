import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  shareIconButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent',
    },
    '&:hover > span > $shareIconSvg > $shareIcon': {
      stroke: theme.palette.secondary.main,
    },
  },
  shareIconSvg: {
    height: ({ small }) => (small ? '20px' : 'auto'),
  },
  shareIcon: {
    stroke: theme.palette.grey.default,
  },
}))

const ShareIconButton = ({ small, ...props }) => {
  const classes = useStyles({ small })

  return (
    <IconButton className={classes.shareIconButton} {...props} disableFocusRipple disableRipple>
      <svg className={classes.shareIconSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26">
        <g
          className={classes.shareIcon}
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          transform="translate(1 1)"
        >
          <circle cx="18" cy="3.6" r="3.6" />
          <circle cx="3.6" cy="12" r="3.6" />
          <circle cx="18" cy="20.4" r="3.6" />
          <path d="M6.708 13.812l8.196 4.776M14.892 5.412l-8.184 4.776" />
        </g>
      </svg>
    </IconButton>
  )
}

ShareIconButton.propTypes = {
  small: PropTypes.bool,
}

ShareIconButton.defaultProps = {
  small: false,
}

export default memo(ShareIconButton)
