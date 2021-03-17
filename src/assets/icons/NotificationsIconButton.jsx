import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  notificationIconButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:hover > span > span > $notification': {
      stroke: theme.palette.secondary.main,
    },
  },
  badge: {
    '&> span': {
      fontSize: '12px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: '0.3px',
      color: '#ffffff',
    },
  },
  notification: {
    stroke: theme.palette.grey.default,
  },
}))

const NotificationIconButton = ({ count, ...props }) => {
  const classes = useStyles()

  return (
    <IconButton className={classes.notificationIconButton} {...props} disableFocusRipple disableRipple>
      <Badge className={classes.badge} color="secondary" badgeContent={count} max={99}>
        <svg className={classes.notification} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
          <path
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M25 19H1a3.6 3.6 0 0 0 3.6-3.6v-6a8.4 8.4 0 1 1 16.8 0v6A3.6 3.6 0 0 0 25 19zm-9.924 4.8a2.4 2.4 0 0 1-4.152 0h4.152z"
          />
        </svg>
      </Badge>
    </IconButton>
  )
}

NotificationIconButton.propTypes = {
  count: PropTypes.number,
}

NotificationIconButton.defaultProps = {
  count: 0,
}

export default memo(NotificationIconButton)
