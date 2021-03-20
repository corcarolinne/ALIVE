import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Grid } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
import ChannelItem from '../../components/ChannelItem'

const mockChannels = [
  {
    channelName: 'Channel Name',
    avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
  },
  {
    channelName: 'Channel Name',
    avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
  },
  {
    channelName: 'Channel Name',
    avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
  },
  {
    channelName: 'Channel Name',
    avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
  },
  {
    channelName: 'Channel Name',
    avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
  },
  {
    channelName: 'Channel Name',
    avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
  },
  {
    channelName: 'Channel Name',
    avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
  },
  {
    channelName: 'Channel Name',
    avatar: 'https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979',
  },
]

const Following = () => (
  <SimplePage title="Following">
    <Grid container alignItems="center" justify="center" spacing={5}>
      {mockChannels.map((item) => (
        <Grid item xs={3}>
          <ChannelItem avatar={item.avatar} channelName={item.channelName} />
        </Grid>
      ))}
    </Grid>
  </SimplePage>
)

Following.propTypes = {}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Following))
