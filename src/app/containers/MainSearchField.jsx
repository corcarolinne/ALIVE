import React, { memo } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import SearchField from '../components/SearchField'

const MainSearchField = () => (
  <SearchField
    id="main-search-field"
    // isLoading={loading}
  />
)

MainSearchField.propTypes = {}

const mapDispatchToProps = {
  pushPage: push,
}

export default memo(connect(null, mapDispatchToProps)(MainSearchField))
