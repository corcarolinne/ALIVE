import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'

const VisibilityIcon = ({ className }) => {
  const theme = useTheme()
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14">
      <g fill={theme.palette.secondary.main}>
        <path d="M21.86 6.573C21.664 6.304 16.98 0 11 0 5.019 0 .336 6.304.14 6.573c-.187.254-.187.6 0 .854C.336 7.696 5.019 14 11 14c5.98 0 10.664-6.304 10.86-6.573.187-.254.187-.6 0-.854zM11 12.552c-4.406 0-8.221-4.185-9.35-5.552C2.776 5.63 6.584 1.448 11 1.448c4.405 0 8.22 4.184 9.35 5.552-1.127 1.37-4.935 5.552-9.35 5.552z" />
        <path d="M11 2C8.794 2 7 4.019 7 6.5S8.794 11 11 11s4-2.019 4-4.5S13.206 2 11 2zm0 7.5c-1.47 0-2.667-1.346-2.667-3s1.197-3 2.667-3c1.47 0 2.667 1.346 2.667 3s-1.197 3-2.667 3z" />
      </g>
    </svg>
  )
}

VisibilityIcon.propTypes = {
  className: PropTypes.string,
}

VisibilityIcon.defaultProps = {
  className: '',
}

export default memo(VisibilityIcon)
