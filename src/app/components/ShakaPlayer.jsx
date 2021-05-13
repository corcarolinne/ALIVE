import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import cx from 'classnames'

const useStyles = makeStyles(() => ({
  shakaPlayer: (styles) => ({ ...styles, outline: 'none', display: 'flex' }),
}))

const ShakaPlayer = ({
  className,
  thumbnail,
  uri,
  isPlaying,

  width,
  height,
  objectFit,
}) => {
  const videoRef = useRef(null)

  const classes = useStyles({ width, height, objectFit })

  useEffect(() => {
    if (videoRef.current) {
      // handlePlayerReady
      const handlePlayerReady = (src, elPlayer) => {
        elPlayer.setRebufferToLive(true)
        elPlayer.setAutoplay(true)
        elPlayer.load(src)
        elPlayer.setVolume(100)
      }

      const { PlayerState, PlayerEventType } = window.IVSPlayer

      // Initialize player
      const elPlayer = window.IVSPlayer.create()
      elPlayer.attachHTMLVideoElement(videoRef.current)

      // Attach event listeners
      elPlayer.addEventListener(PlayerState.PLAYING, () => {
        console.log('Player State - PLAYING')
      })
      elPlayer.addEventListener(PlayerState.ENDED, () => {
        console.log('Player State - ENDED')
      })
      elPlayer.addEventListener(PlayerState.READY, () => {
        console.log('Player State - READY')
      })
      elPlayer.addEventListener(PlayerEventType.ERROR, (err) => {
        console.warn('Player Event - ERROR:', err)
      })
      elPlayer.addEventListener(PlayerEventType.TEXT_METADATA_CUE, (cue) => {
        const metadataText = cue.text
        const position = elPlayer.getPosition().toFixed(2)
        console.log(`Player Event - TEXT_METADATA_CUE: "${metadataText}". Observed ${position}s after playback started.`)
      })

      // Player config
      handlePlayerReady(uri, elPlayer)
    }
  }, [uri, videoRef.current])

  return (
    // eslint-disable-next-line
    <video
      ref={videoRef}
      className={cx(classes.shakaPlayer, className)}
      poster={thumbnail}
      preload="auto"
      autoPlay={isPlaying}
      muted={false}
      controls
    />
  )
}

ShakaPlayer.propTypes = {
  className: PropTypes.string,
  uri: PropTypes.string,
  thumbnail: PropTypes.string,
  isPlaying: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  objectFit: PropTypes.string,
}

ShakaPlayer.defaultProps = {
  className: '',
  uri: '',
  thumbnail: '',
  isPlaying: false,
  height: 'auto',
  width: 'auto',
  objectFit: 'contain',
}

export default ShakaPlayer
