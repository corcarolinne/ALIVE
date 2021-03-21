import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Menu from '@material-ui/core/Menu'

const useStyles = makeStyles((theme) => ({
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  userAvatar: {
    marginRight: '0',
  },
  userDisplayName: {
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.25',
    letterSpacing: '-0.1px',
    color: theme.palette.secondary.main,
  },
  userEmail: {
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.67',
    letterSpacing: '-0.08px',
  },
  popover: {
    backgroundColor: theme.palette.primary.dark,
  },
}))

const UserMenu = ({ user, children, ...props }) => {
  const classes = useStyles()
  return (
    <Menu {...props} PopoverClasses={{ paper: classes.popover }}>
      {children}
    </Menu>
  )
}

UserMenu.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    avatar: PropTypes.string,
    email: PropTypes.string,
  }),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

UserMenu.defaultProps = {
  user: {
    displayName: '',
    avatar: '',
    email: '',
  },
  children: null,
}

export default memo(UserMenu)
