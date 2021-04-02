import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Grid } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
import ChannelItem from '../../components/ChannelItem'

import modules from '../../modules'

const Following = ({ channels }) => (
  <SimplePage title="Following">
    <Grid container alignItems="center" justify="center" spacing={5}>
      {channels.map((item) => (
        <Grid item xs={3}>
          <ChannelItem avatar={item.avatar} channelName={item.channelName} />
        </Grid>
      ))}
    </Grid>
  </SimplePage>
)

Following.propTypes = {
  channels: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  channels: modules.following.selectors.getChannels,
})

const mapDispatchToProps = {}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Following))
