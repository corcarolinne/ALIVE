import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { push } from 'connected-react-router'
import { Button } from '@material-ui/core'

import MenuItem from '@material-ui/core/MenuItem'
import { NavLink } from 'react-router-dom'

import Header from '../components/Header'
import UserMenu from '../components/UserMenu'
import UserName from '../components/UserName'
import MainSearchField from './MainSearchField'
import RegisterModal from './RegisterModal'
import SettingsModal from './SettingsModal'
import LoginModal from './LoginModal'
import modules from '../modules'

const ConnectedHeader = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Header showHeader shouldShowHeaderWithBackGround={false}>
      <MainSearchField />
      <Button color="primary">About</Button>
      {!user ? (
        <>
          <RegisterModal />
          <LoginModal />
        </>
      ) : (
        <>
          <UserName
            onClick={handleClick}
            avatarSrc="https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979"
          />
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
            <MenuItem onClick={handleClose}>Logout</MenuItem>
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
  // pushPage: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  location: modules.router.selectors.getLocation,
  user: modules.auth.selectors.getUser,
})

const mapDispatchToProps = {
  pushPage: push,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader))
