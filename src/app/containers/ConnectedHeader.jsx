import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { push } from 'connected-react-router'

import MenuItem from '@material-ui/core/MenuItem'
import { NavLink } from 'react-router-dom'

import Header from '../components/Header'
import UserMenu from '../components/UserMenu'
import UserName from '../components/UserName'
import RegisterModal from './RegisterModal'
import SettingsModal from './SettingsModal'
import LoginModal from './LoginModal'
import modules from '../modules'

const ConnectedHeader = ({ user, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Header showHeader shouldShowHeaderWithBackGround={false}>
      {!user ? (
        <>
          <RegisterModal />
          <LoginModal />
        </>
      ) : (
        <>
          <UserName onClick={handleClick} avatarSrc={user.avatar} />
          <UserMenu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <SettingsModal onClick={handleClose} />
            <MenuItem onClick={handleClose}>
              <NavLink
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
                to="/following"
              >
                Following
              </NavLink>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose()
                logout()
              }}
            >
              Logout
            </MenuItem>
          </UserMenu>
        </>
      )}
    </Header>
  )
}

ConnectedHeader.propTypes = {
  user: PropTypes.object.isRequired,
  // state
  // actions
  logout: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  location: modules.router.selectors.getLocation,
  user: modules.state.selectors.getUser,
})

const mapDispatchToProps = {
  pushPage: push,
  logout: modules.state.actions.logout,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader))
