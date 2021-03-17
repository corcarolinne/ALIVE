import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'

const VideoUploadIcon = ({ className }) => {
  const theme = useTheme()
  return (
    <div>
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
        <g fill={theme.palette.secondary.main}>
          <path
            strokeWidth=".3"
            d="M15.302 16h-4.604c-.386 0-.698.33-.698.736v9.528c0 .407.312.736.698.736h4.604c.386 0 .698-.33.698-.736v-9.528c0-.407-.312-.736-.698-.736zm-.697 9.528h-3.21v-8.056h3.21v8.056zM26.19 10h-5.38c-.448 0-.81.334-.81.746v15.508c0 .412.362.746.81.746h5.38c.448 0 .81-.334.81-.746V10.746c0-.412-.362-.746-.81-.746zm-.808 15.509h-3.764V11.49h3.764V25.51zM6.19 19H.81c-.448 0-.81.355-.81.792v6.416c0 .437.362.792.81.792h5.38c.448 0 .81-.355.81-.792v-6.416c0-.437-.362-.792-.81-.792zm-.808 6.416H1.618v-4.832h3.764v4.832zM26.804.786c-.116-.164-.297-.265-.494-.274l-6.917-.51c-.42-.032-.786.293-.818.726-.031.433.284.81.704.843l4.895.342-9 7.264-6.88-5.568c-.293-.24-.713-.223-.988.04L.237 10.626c-.3.294-.317.782-.038 1.098.136.181.348.284.57.274.2-.003.392-.087.532-.235l6.575-6.508 6.804 5.528c.277.23.672.23.95 0l9.73-7.81-.38 4.87c-.002.425.31.782.722.823h.038c.392.002.72-.304.76-.706l.494-6.626c.028-.204-.043-.409-.19-.549z"
          />
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
