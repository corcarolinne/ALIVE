import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  configIconButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent',
    },
    '&:hover > span > $configIcon': {
      stroke: theme.palette.secondary.main,
    },
  },
  configIcon: {
    stroke: theme.palette.grey.default,
  },
}))

const ConfigIconButton = (props) => {
  const classes = useStyles()

  return (
    <IconButton className={classes.configIconButton} {...props} disableFocusRipple disableRipple>
      <svg className={classes.configIcon} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
        <g
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          transform="translate(1 1)"
        >
          <circle cx="12" cy="12" r="3.273" />
          <path d="M20.073 15.273a1.8 1.8 0 0 0 .36 1.985l.065.066a2.182 2.182 0 1 1-3.087 3.087l-.066-.066a1.8 1.8 0 0 0-1.985-.36 1.8 1.8 0 0 0-1.09 1.648v.185a2.182 2.182 0 0 1-4.365 0v-.098a1.8 1.8 0 0 0-1.178-1.647 1.8 1.8 0 0 0-1.985.36l-.066.065a2.182 2.182 0 1 1-3.087-3.087l.066-.066a1.8 1.8 0 0 0 .36-1.985 1.8 1.8 0 0 0-1.648-1.09h-.185a2.182 2.182 0 0 1 0-4.365h.098a1.8 1.8 0 0 0 1.647-1.178 1.8 1.8 0 0 0-.36-1.985l-.065-.066A2.182 2.182 0 1 1 6.589 3.59l.066.066a1.8 1.8 0 0 0 1.985.36h.087a1.8 1.8 0 0 0 1.091-1.648v-.185a2.182 2.182 0 0 1 4.364 0v.098a1.8 1.8 0 0 0 1.09 1.647 1.8 1.8 0 0 0 1.986-.36l.066-.065a2.182 2.182 0 1 1 3.087 3.087l-.066.066a1.8 1.8 0 0 0-.36 1.985v.087a1.8 1.8 0 0 0 1.648 1.091h.185a2.182 2.182 0 0 1 0 4.364h-.098a1.8 1.8 0 0 0-1.647 1.09z" />
        </g>
      </svg>
    </IconButton>
  )
}

export default memo(ConfigIconButton)
