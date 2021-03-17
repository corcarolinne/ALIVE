import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  thumbsDownWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent',
    },

    '&:hover > span > $thumbsDownIcon': {
      stroke: theme.palette.secondary.main,
    },

    '&:hover > span > $numberOfDislikes': {
      color: theme.palette.secondary.main,
    },
  },

  thumbsDownIcon: {
    marginRight: '12px',
    height: ({ small }) => (small ? '17.5px' : 'auto'),
    stroke: ({ isActive }) => (isActive ? theme.palette.secondary.main : theme.palette.grey.default),
  },

  numberOfDislikes: {
    fontSize: ({ small }) => (small ? '12px' : '16px'),
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.25',
    letterSpacing: '-0.1px',
    color: ({ isActive }) => (isActive ? theme.palette.secondary.main : theme.palette.grey.default),
  },
}))

const ThumbsDownIconButton = ({ isActive, numberOfDislikes, small, ...props }) => {
  const classes = useStyles({ isActive, small })

  return (
    <IconButton className={classes.thumbsDownWrapper} {...props} disableFocusRipple disableRipple>
      <svg className={classes.thumbsDownIcon} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
        <path
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.368 16.6v4.8c0 1.988 1.638 3.6 3.658 3.6l4.877-10.8V1H5.15C3.933.987 2.893 1.857 2.71 3.04l-1.682 10.8a2.374 2.374 0 0 0 .57 1.935c.47.531 1.153.833 1.868.825h6.902zM18.903 1h3.256C23.587.976 24.809 2.007 25 3.4v8.4c-.192 1.394-1.413 2.425-2.841 2.4h-3.256V1z"
        />
      </svg>
      {numberOfDislikes > 0 && <div className={classes.numberOfDislikes}>{numberOfDislikes}</div>}
    </IconButton>
  )
}

ThumbsDownIconButton.propTypes = {
  isActive: PropTypes.bool,
  numberOfDislikes: PropTypes.number,
  small: PropTypes.bool,
}

ThumbsDownIconButton.defaultProps = {
  isActive: false,
  numberOfDislikes: 0,
  small: false,
}

export default memo(ThumbsDownIconButton)
