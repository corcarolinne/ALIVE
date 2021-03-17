import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'

const VideoUploadIcon = ({ className }) => {
  const theme = useTheme()
  return (
    <div style={{ display: 'block' }}>
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26">
        <g fill={theme.palette.secondary.main} fillRule="nonzero" stroke={theme.palette.secondary.main}>
          <path
            strokeWidth=".3"
            d="M7.529 5.686l3.034-2.805v8.083a.556.556 0 1 0 1.111 0V2.88l3.035 2.805a.556.556 0 1 0 .754-.816l-3.967-3.667a.555.555 0 0 0-.754 0L6.774 4.871a.556.556 0 1 0 .755.815z"
          />
          <path
            strokeWidth=".3"
            d="M18.181 9.096h-2.693a.556.556 0 1 0 0 1.11h2.693c.92.002 1.666.747 1.667 1.667v10.583a1.668 1.668 0 0 1-1.667 1.667H3.784a1.668 1.668 0 0 1-1.667-1.667V11.873c.001-.92.747-1.665 1.667-1.666h2.692a.556.556 0 1 0 0-1.111H3.784a2.78 2.78 0 0 0-2.778 2.777v10.583a2.78 2.78 0 0 0 2.778 2.778H18.18a2.78 2.78 0 0 0 2.778-2.778V11.873a2.78 2.78 0 0 0-2.778-2.777z"
          />
          <path
            strokeWidth=".4"
            d="M8.9 21.466a.906.906 0 0 1-.452-.122.881.881 0 0 1-.448-.77V13.89a.88.88 0 0 1 .448-.77.91.91 0 0 1 .906 0l5.754 3.342a.88.88 0 0 1 .444.77c0 .32-.166.607-.444.768l-5.754 3.341a.903.903 0 0 1-.454.124zm.008-7.577l-.02 6.684v.002l5.773-3.342-5.753-3.344z"
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
