import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import identity from 'lodash/fp/identity'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import cx from 'classnames'

const useStyles = makeStyles((theme) => ({
  volumeIconButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent',
    },
    '&:hover > span > $volumeIcon': {
      stroke: theme.palette.secondary.main,
    },
  },
  volumeIcon: {
    stroke: theme.palette.grey.default,
  },
}))

const VolumeIconButton = ({ volume, className, onClick, ...props }) => {
  const classes = useStyles()
  // eslint-disable-next-line
  let VolumeIcon = (
    <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path id="svg_2" d="m11.8,1.2l-6,4.8l-4.8,0l0,7.2l4.8,0l6,4.8l0,-16.8zm5.448,4.152a6,6 0 0 1 0,8.484" />
    </g>
  )

  if (volume === 0) {
    VolumeIcon = (
      <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M11.8 1.2L5.8 6H1v7.2h4.8l6 4.8zM25 6.571l-6.857 6.858M18.143 6.571L25 13.429" />
      </g>
    )
  }
  if (volume > 50) {
    VolumeIcon = (
      <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M11.8 1.2L5.8 6H1v7.2h4.8l6 4.8zM21.484 1.116c4.685 4.686 4.685 12.282 0 16.968M17.248 5.352a6 6 0 0 1 0 8.484" />
      </g>
    )
  }

  const onClickHandler = useCallback(
    (e) => {
      if (e.stopPropagation) {
        e.stopPropagation()
      }
      e.preventDefault()
      onClick(e)
    },
    [onClick]
  )

  return (
    <IconButton
      className={cx(classes.volumeIconButton, className)}
      onClick={onClickHandler}
      {...props}
      disableFocusRipple
      disableRipple
    >
      <svg className={classes.volumeIcon} xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20">
        {VolumeIcon}
      </svg>
    </IconButton>
  )
}

VolumeIconButton.propTypes = {
  volume: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

VolumeIconButton.defaultProps = {
  volume: 0,
  className: '',
  onClick: identity,
}

export default memo(VolumeIconButton)
