import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { push } from 'connected-react-router'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import UserMenu from '../components/UserMenu'

import UserManagementIcon from '../../assets/icons/UserManagementIcon'
// import ChannelIcon from '../../assets/icons/ChannelIcon'
import SubscriptionIcon from '../../assets/icons/SubscriptionIcon'
import StudioIcon from '../../assets/icons/StudioIcon'
import LogoutIcon from '../../assets/icons/LogoutIcon'

import api from '../graphql'
import modules from '../modules'

const ConnectedHeader = ({ pushPage, user, isUserCreator, requestApiCall }) => {
  const logoutHandler = useCallback(() => {
    requestApiCall(api.callNames.logout, {}, modules.auth.actions.LOGOUT)
  }, [requestApiCall])

  const pushToManageAccount = useCallback(() => {
    pushPage('/manageAccount', null)
  }, [pushPage])

  const pushToSubscriptions = useCallback(() => {
    pushPage('/subscriptions', null)
  }, [pushPage])

  const pushToStudio = useCallback(() => {
    pushPage('/studio', null)
  }, [pushPage])

  return (
    <UserMenu user={user}>
      <ListItem button onClick={pushToManageAccount}>
        <ListItemIcon>
          <UserManagementIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Account" />
      </ListItem>
      <ListItem button onClick={pushToSubscriptions}>
        <ListItemIcon>
          <SubscriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Subscriptions" />
      </ListItem>
      {/* <ListItem button>
        <ListItemIcon>
          <ChannelIcon />
        </ListItemIcon>
        <ListItemText primary="My Channels" />
      </ListItem> */}
      {isUserCreator && (
        <ListItem button onClick={pushToStudio}>
          <ListItemIcon>
            <StudioIcon />
          </ListItemIcon>
          <ListItemText primary="Studio" />
        </ListItem>
      )}
      <ListItem button onClick={logoutHandler}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </UserMenu>
  )
}

ConnectedHeader.propTypes = {
  // state
  user: PropTypes.shape({
    displayName: PropTypes.string,
    avatar: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  isUserCreator: PropTypes.bool.isRequired,
  // actions
  pushPage: PropTypes.func.isRequired,
  requestApiCall: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  user: modules.auth.selectors.getUser,
  isUserCreator: modules.auth.selectors.isUserCreator,
})

const mapDispatchToProps = {
  pushPage: push,
  requestApiCall: modules.connectivity.actions.requestApiCall,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader))
