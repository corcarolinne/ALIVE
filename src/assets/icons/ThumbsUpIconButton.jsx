import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  thumbsUpWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent',
    },

    '&:hover > span > $thumbsUpIcon': {
      stroke: theme.palette.secondary.main,
    },

    '&:hover > span > $numberOfLikes': {
      color: theme.palette.secondary.main,
    },
  },

  thumbsUpIcon: {
    marginRight: '12px',
    height: ({ small }) => (small ? '17.5px' : 'auto'),
    stroke: ({ isActive }) => (isActive ? theme.palette.secondary.main : theme.palette.grey.default),
  },

  numberOfLikes: {
    fontSize: ({ small }) => (small ? '12px' : '16px'),
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.25',
    letterSpacing: '-0.1px',
    color: ({ isActive }) => (isActive ? theme.palette.secondary.main : theme.palette.grey.default),
  },
}))

const ThumbsUpIconButton = ({ isActive, numberOfLikes, small, ...props }) => {
  const classes = useStyles({ isActive, small })

  return (
    <IconButton className={classes.thumbsUpWrapper} {...props} disableFocusRipple disableRipple>
      <svg className={classes.thumbsUpIcon} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
        <path
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.632 9.4V4.6c0-1.988-1.638-3.6-3.658-3.6L7.097 11.8V25H20.85c1.216.013 2.256-.857 2.439-2.04l1.682-10.8a2.374 2.374 0 0 0-.57-1.935 2.456 2.456 0 0 0-1.868-.825h-6.902zM7.097 25H3.84c-1.428.024-2.65-1.007-2.841-2.4v-8.4c.192-1.394 1.413-2.425 2.841-2.4h3.256V25z"
        />
      </svg>
      {numberOfLikes > 0 && <div className={classes.numberOfLikes}>{numberOfLikes}</div>}
    </IconButton>
  )
}

ThumbsUpIconButton.propTypes = {
  isActive: PropTypes.bool,
  numberOfLikes: PropTypes.number,
  small: PropTypes.bool,
}

ThumbsUpIconButton.defaultProps = {
  isActive: false,
  numberOfLikes: 0,
  small: false,
}

export default memo(ThumbsUpIconButton)
