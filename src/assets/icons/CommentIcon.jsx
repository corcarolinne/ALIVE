import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'

const VideoUploadIcon = ({ className }) => {
  const theme = useTheme()
  return (
    <div>
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25">
        <g fill={theme.palette.secondary.main}>
          <path
            strokeWidth=".3"
            d="M23.288 0H3.712C1.665 0 0 1.676 0 3.736v12.057c0 2.055 1.658 3.728 3.699 3.736V25l7.813-5.471h11.776c2.047 0 3.712-1.676 3.712-3.736V3.736C27 1.676 25.335 0 23.288 0zm2.13 15.793c0 1.182-.956 2.143-2.13 2.143H11.015l-5.734 4.016v-4.016H3.712c-1.174 0-2.13-.961-2.13-2.143V3.736c0-1.182.956-2.144 2.13-2.144h19.576c1.174 0 2.13.962 2.13 2.144v12.057z"
          />
          <path strokeWidth=".3" d="M7 5L20 5 20 7 7 7zM7 9L20 9 20 11 7 11zM7 13L20 13 20 15 7 15z" />
        </g>
      </svg>
    </div>
  )
}

VideoUploadIcon.propTypes = {
  className: PropTypes.string,
}

VideoUploadIcon.defaultProps = {
  className: '',
}

export default memo(VideoUploadIcon)
