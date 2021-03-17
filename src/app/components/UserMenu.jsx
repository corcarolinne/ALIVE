import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import PopperList from './PopperList'
import UserName from './UserName'

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
}))

const UserMenu = ({ user, children }) => {
  const classes = useStyles()
  return (
    <PopperList
      anchorMargin="0px 0px 0px 40px"
      anchor={<UserName customStyles={{ avatar: classes.userAvatar }} avatarSrc={user.avatar} />}
    >
      <ListItem>
        <div className={classes.userInfo}>
          <Typography className={classes.userDisplayName}>{user.displayName}</Typography>
          <Typography className={classes.userEmail}>{user.email}</Typography>
        </div>
      </ListItem>
      <Divider />
      {children}
    </PopperList>
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
