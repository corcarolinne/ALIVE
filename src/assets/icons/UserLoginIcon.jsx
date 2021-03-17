import React, { memo } from 'react'
import { useTheme } from '@material-ui/core/styles'

const UserLoginIcon = () => {
  const theme = useTheme()
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
        <g
          fill="none"
          fillRule="evenodd"
          stroke={theme.palette.secondary.main}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(1 1)"
        >
          <path d="M12 13.5V12c0-1.657-1.343-3-3-3H3c-1.657 0-3 1.343-3 3v1.5" />
          <circle cx="6" cy="3" r="3" />
        </g>
      </svg>
    </div>
  )
}

export default memo(UserLoginIcon)
