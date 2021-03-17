import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'

const VideoUploadIcon = ({ className }) => {
  const theme = useTheme()
  return (
    <div>
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20">
        <g fill={theme.palette.secondary.main} stroke={theme.palette.secondary.main}>
          <path
            d="M26.224 18.99H.458c-.246 0-.445-.199-.445-.445V.775c0-.245.2-.444.445-.444h25.766c.245 0 .444.199.444.444v17.77c0 .246-.199.445-.444.445zM.902 18.1H25.78V1.22H.902V18.1z"
            transform="translate(1)"
            strokeWidth=".3"
          />
          <path
            d="M11.13 13.686c-.154 0-.31-.04-.451-.122-.28-.161-.448-.45-.448-.77V6.11c0-.322.168-.61.448-.771.28-.161.627-.16.906.001l5.754 3.342c.278.161.444.45.444.769 0 .32-.166.607-.444.769l-5.754 3.341c-.142.083-.298.124-.454.124h0zm.009-7.577l-.02 6.684v.001l5.773-3.342L11.14 6.11z"
            transform="translate(1)"
            strokeWidth=".3"
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
