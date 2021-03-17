import React, { memo } from 'react'
import { useTheme } from '@material-ui/core/styles'

const PasswordLoginIcon = () => {
  const theme = useTheme()
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18">
        <g
          fill="none"
          fillRule="evenodd"
          stroke={theme.palette.secondary.main}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(1 1)"
        >
          <rect width="14" height="8.556" y="7" rx="2" />
          <path d="M3.111 7V3.889a3.889 3.889 0 117.778 0V7" />
        </g>
      </svg>
    </div>
  )
}

export default memo(PasswordLoginIcon)
