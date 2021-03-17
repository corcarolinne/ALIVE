import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { gql, useQuery } from '@apollo/client'

import SearchField from '../components/SearchField'

import client from '../graphql/client'

const GET_VIDEOS_TITLES = gql`
  query getVideosTitles($searchString: String) {
    getVideosTitles(searchString: $searchString)
  }
`

const MainSearchField = ({ pushPage }) => {
  const { /* loading, */ data = {}, refetch } = useQuery(GET_VIDEOS_TITLES, {
    client,
    fetchPolicy: 'standby',
    // notifyOnNetworkStatusChange: true,
    variables: {
      searchString: '',
    },
  })

  const options = data.getVideosTitles || []

  const handleChange = useCallback(
    (value) => {
      if (value !== '') {
        pushPage(`/results?query=${value}`)
      }
    },
    [pushPage]
  )

  const handleRequestOptions = useCallback(
    (value) => {
      refetch({
        searchString: value,
      })
    },
    [refetch]
  )

  return (
    <SearchField
      id="main-search-field"
      options={options}
      onChange={handleChange}
      onRequestOptions={handleRequestOptions}
      // isLoading={loading}
    />
  )
}

MainSearchField.propTypes = {
  // actions
  pushPage: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  pushPage: push,
}

export default memo(connect(null, mapDispatchToProps)(MainSearchField))
