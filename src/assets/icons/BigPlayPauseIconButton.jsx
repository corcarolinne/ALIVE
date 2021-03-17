import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import identity from 'lodash/fp/identity'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import cx from 'classnames'

const useStyles = makeStyles(() => ({
  playPauseIconButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent',
    },
  },
}))

const BigPlayPauseIconButton = ({ className, isActive, onClick, small, color, ...props }) => {
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
    <IconButton
      className={cx(classes.playPauseIconButton, className)}
      onClick={onClickHandler}
      {...props}
      disableFocusRipple
      disableRipple
    >
      {isActive ? (
        <svg xmlns="http://www.w3.org/2000/svg" width={small ? '58' : '84'} height={small ? '58' : '84'} viewBox="0 0 36 36">
          <g fill="none" fillRule="evenodd">
            <circle
              cx="17"
              cy="17"
              r="17"
              stroke={color === 'main' ? theme.palette.secondary.main : theme.palette.grey.light}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              transform="translate(1 1)"
            />
            <g
              fill={color === 'main' ? theme.palette.secondary.main : theme.palette.primary.contrastText}
              transform="translate(12 11)"
            >
              <rect width="4" height="14" rx="2" />
              <rect width="4" height="14" x="8" rx="2" />
            </g>
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width={small ? '58' : '84'} height={small ? '58' : '84'} viewBox="0 0 84 84">
          <g fill="none" fillRule="evenodd" transform="translate(2 2)">
            <circle
              cx="40"
              cy="40"
              r="40"
              stroke={color === 'main' ? theme.palette.secondary.main : theme.palette.primary.contrastText}
              opacity={color === 'main' ? '1' : '.194'}
              strokeWidth="3"
            />
            <path
              fill={color === 'main' ? theme.palette.secondary.main : theme.palette.primary.contrastText}
              d="M38.386 33.223l8.2 5.076a2 2 0 0 1 0 3.402l-8.2 5.076a2 2 0 0 1-3.053-1.7V34.923a2 2 0 0 1 3.053-1.7z"
            />
          </g>
        </svg>
      )}
    </IconButton>
  )
}

BigPlayPauseIconButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['main', 'secondary']),
  isActive: PropTypes.bool,
  small: PropTypes.bool,
  onClick: PropTypes.func,
}

BigPlayPauseIconButton.defaultProps = {
  className: '',
  color: 'secondary',
  isActive: false,
  small: false,
  onClick: identity,
}

export default memo(BigPlayPauseIconButton)
