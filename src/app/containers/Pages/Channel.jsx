import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Grid } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
// import Thumbnail from '../../components/Thumbnail'
import MainPlayer from '../../components/MainPlayer'

const Channel = () => (
  <SimplePage>
    <Grid
      style={{
        marginTop: 20,
      }}
      container
      alignItems="center"
      justify="center"
      direction="column"
      spacing={5}
    >
      <Grid item>
        <MainPlayer
          uri="https://d35xptopo3stpj.cloudfront.net/10f57900-5cba-4545-9b7d-01838e4b0360/dash/9fba20c0c15d73e0_9ca2485b42f2f3a1.mpd"
          avatar="https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979"
          title="Live Title"
          viewersNumber="12,890"
        />
      </Grid>
    </Grid>
  </SimplePage>
)

Channel.propTypes = {}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Channel))
