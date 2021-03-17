import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import cx from 'classnames'
import shaka from 'shaka-player'
import identity from 'lodash/fp/identity'

const useStyles = makeStyles(() => ({
  shakaPlayer: (styles) => ({ ...styles, outline: 'none', display: 'flex' }),
}))

const ShakaPlayer = ({
  className,
  thumbnail,
  uri,
  isPlaying,
  isMuted,

  width,
  height,
  objectFit,
}) => {
  const videoRef = useRef(null)
  const controller = useRef({})

  const classes = useStyles({ width, height, objectFit })

  // Effect to handle component mount & unmount.
  // Not related to the src prop, this hook creates a shaka.Player instance.
  // This should always be the first effect to run.
  useEffect(() => {
    const videoElement = videoRef.current
    const player = new shaka.Player(videoElement)

    // Store Shaka's API in order to expose it as a handle.
    controller.current = { player, videoElement }

    return () => {
      if (document.pictureInPictureElement) {
        // treat this better if I want to allow picinpic when changing page within the app
        document.exitPictureInPicture().catch(identity)
      }

      player.destroy()
    }
    // eslint-disable-next-line
  }, [])

  // Load the source uri when we have one.
  useEffect(() => {
    const { player } = controller.current

    if (player) {
      shaka.polyfill.installAll()
      // Check to see if the browser supports the basic APIs Shaka needs.
      if (shaka.Player.isBrowserSupported()) {
        // https://docs.aws.amazon.com/mediaconvert/latest/ug/cbr-vbr-qvbr.html#qvbr-guidelines
        const Bandwidth = {
          B: 6500000, // width="1280" height="720"
          C: 5000000, // width="1280" height="720"
          D: 3500000, // width="960"  height="540"
          E: 3500000, // width="1280" height="720"
          F: 1200000, // width="640"  height="360"
          G: 600000, // width="640"  height="360"
          H: 400000, // width="480"  height="270"
        }
        // Forces the video to start with a low quality
        player.configure('abr.defaultBandwidthEstimate', Bandwidth.B)

        player
          .load(uri)
          .then(() => {})
          .catch(() => {
            // eslint-disable-next-line
            console.error('Failed to load video')
          })
      } else {
        // This browser does not have the minimum set of APIs we need.
        // eslint-disable-next-line
        console.error('Browser not supported!')
      }
    }
    // eslint-disable-next-line
  }, [uri])

  return (
    // eslint-disable-next-line
    <video
      ref={videoRef}
      className={cx(classes.shakaPlayer, className)}
      poster={thumbnail}
      preload="auto"
      autoPlay={isPlaying}
      muted={isMuted}
      controls
    />
  )
}

ShakaPlayer.propTypes = {
  className: PropTypes.string,
  uri: PropTypes.string,
  thumbnail: PropTypes.string,
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  objectFit: PropTypes.string,
}

ShakaPlayer.defaultProps = {
  className: '',
  uri: '',
  thumbnail: '',
  isPlaying: false,
  isMuted: false,
  height: 'auto',
  width: 'auto',
  objectFit: 'contain',
}

export default ShakaPlayer
