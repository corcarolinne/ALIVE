import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import modules from './modules'
import Home from './containers/Pages/Home'
import Channel from './containers/Pages/Channel'
import Following from './containers/Pages/Following'

import api from './graphql'

const Routes = ({ pathName, requestApiCall }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    requestApiCall(api.callNames.getData, {}, modules.state.actions.GET_DATA)
  }, [requestApiCall, pathName])

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/channel/:channelId" component={Channel} />
      <Route exact path="/following" component={Following} />
    </Switch>
  )
}

Routes.propTypes = {
  // state
  pathName: PropTypes.string.isRequired,
  requestApiCall: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  pathName: modules.router.selectors.getPathName,
})

const mapDispatchToProps = {
  requestApiCall: modules.connectivity.actions.requestApiCall,
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
