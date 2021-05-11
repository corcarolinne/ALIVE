import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Grid } from '@material-ui/core'

import SimplePage from '../../components/SimplePage'
import Thumbnail from '../../components/Thumbnail'
import MainPlayer from '../../components/MainPlayer'

import modules from '../../modules'

const Home = ({ lives }) => (
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
          channelId="canalDoWagner"
          uri="https://d35xptopo3stpj.cloudfront.net/10f57900-5cba-4545-9b7d-01838e4b0360/dash/9fba20c0c15d73e0_9ca2485b42f2f3a1.mpd"
          avatar="https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979"
          title="Live Title"
          viewersNumber="12,890"
        />
      </Grid>
      <Grid item>
        <Grid container spacing={3} justify="center">
          {lives.map((item) => (
            <Grid key={item.channelId} item xs={12} sm={4}>
              <Thumbnail avatar={item.avatar} title={item.title} image={item.image} channelId={item.channelId} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </SimplePage>
)

Home.propTypes = {
  lives: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  lives: modules.home.selectors.getLives,
})

const mapDispatchToProps = {}

export default memo(connect(mapStateToProps, mapDispatchToProps)(Home))
