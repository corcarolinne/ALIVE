import React, { memo } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { push } from 'connected-react-router'
import { Button } from '@material-ui/core'

import Header from '../components/Header'
import MainSearchField from './MainSearchField'
import RegisterModal from './RegisterModal'
import modules from '../modules'

const ConnectedHeader = () => (
  <Header showHeader shouldShowHeaderWithBackGround={false}>
    <>
      <MainSearchField />
      <Button color="primary">About</Button>
      <RegisterModal />
      <Button color="primary">Sign In</Button>
    </>
  </Header>
)

// ConnectedHeader.propTypes = {
//   // isMobile: PropTypes.bool.isRequired,
//   // state
//   // actions
//   // pushPage: PropTypes.func.isRequired,
// }

const mapStateToProps = createStructuredSelector({
  location: modules.router.selectors.getLocation,
  user: modules.auth.selectors.getUser,
})

const mapDispatchToProps = {
  pushPage: push,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader))
