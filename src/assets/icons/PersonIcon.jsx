import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'

const PersonIcon = ({ className }) => {
  const theme = useTheme()
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="10.333" height="11.5" viewBox="0 0 10.333 11.5">
      <g transform="translate(0.5 0.5)">
        <path
          fill="none"
          stroke={theme.palette.secondary.main}
          strokeLinecap="round"
          strokeLinejoin="round"
          fillRule="evenodd"
          d="M9.333,12.5V11.333A2.333,2.333,0,0,0,7,9H2.333A2.333,2.333,0,0,0,0,11.333V12.5"
          transform="translate(0 -2)"
        />
        <circle
          fill="none"
          stroke={theme.palette.secondary.main}
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="2.333"
          cy="2.333"
          r="2.333"
          transform="translate(2.333)"
        />
      </g>
    </svg>
  )
}

PersonIcon.propTypes = {
  className: PropTypes.string,
}

PersonIcon.defaultProps = {
  className: '',
}

export default memo(PersonIcon)
