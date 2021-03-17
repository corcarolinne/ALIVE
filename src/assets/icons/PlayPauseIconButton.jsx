import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import identity from 'lodash/fp/identity'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(() => ({
  playPauseIconButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent',
    },
  },
}))

const PlayIconButton = ({ isActive, onClick, ...props }) => {
  const theme = useTheme()
  const classes = useStyles()
  const onClickHandler = useCallback(
    (e) => {
      if (e.stopPropagation) {
        e.stopPropagation()
      }
      onClick()
    },
    [onClick]
  )

  return (
    <IconButton className={classes.playPauseIconButton} onClick={onClickHandler} {...props} disableFocusRipple disableRipple>
      {isActive ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
          <g fill="none" fillRule="evenodd">
            <circle
              cx="17"
              cy="17"
              r="17"
              stroke={theme.palette.secondary.main}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              transform="translate(1 1)"
            />
            <g fill={theme.palette.secondary.main} transform="translate(12 11)">
              <rect width="4" height="14" rx="2" />
              <rect width="4" height="14" x="8" rx="2" />
            </g>
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
          <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <circle
              cx="17"
              cy="17"
              r="17"
              stroke={theme.palette.secondary.main}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              fill={theme.palette.secondary.main}
              d="M16.06 11.912l6.226 3.892a2 2 0 0 1 0 3.392l-6.226 3.892A2 2 0 0 1 13 21.392v-7.784a2 2 0 0 1 3.06-1.696z"
            />
          </g>
        </svg>
      )}
    </IconButton>
  )
}

PlayIconButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
}

PlayIconButton.defaultProps = {
  isActive: false,
  onClick: identity,
}

export default memo(PlayIconButton)
