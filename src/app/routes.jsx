import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import modules from './modules'
import Home from './containers/Pages/Home'
import Channel from './containers/Pages/Channel'

const Routes = ({ pathName }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/channel" component={Channel} />
    </Switch>
  )
}

Routes.propTypes = {
  // state
  pathName: PropTypes.string.isRequired,
}

const mapStateToProps = createStructuredSelector({
  pathName: modules.router.selectors.getPathName,
})

export default connect(mapStateToProps)(Routes)
