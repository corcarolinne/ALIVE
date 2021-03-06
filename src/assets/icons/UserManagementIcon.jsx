import React, { memo } from 'react'
import { useTheme } from '@material-ui/core/styles'

const UserManagementIcon = () => {
  const theme = useTheme()
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <g
          fill="none"
          fillRule="evenodd"
          stroke={theme.palette.secondary.main}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(1 1)"
        >
          <circle cx="8" cy="8" r="2" />
          <path d="M13.382 10.182a1.2 1.2 0 0 0 .24 1.323l.043.044a1.455 1.455 0 1 1-2.058 2.058l-.043-.043a1.2 1.2 0 0 0-1.324-.24 1.2 1.2 0 0 0-.727 1.098v.123a1.455 1.455 0 1 1-2.91 0v-.065a1.2 1.2 0 0 0-.785-1.098 1.2 1.2 0 0 0-1.323.24l-.044.043a1.455 1.455 0 1 1-2.058-2.058l.043-.043a1.2 1.2 0 0 0 .24-1.324 1.2 1.2 0 0 0-1.098-.727h-.123a1.455 1.455 0 0 1 0-2.91h.065a1.2 1.2 0 0 0 1.098-.785 1.2 1.2 0 0 0-.24-1.323l-.043-.044a1.455 1.455 0 1 1 2.058-2.058l.043.043a1.2 1.2 0 0 0 1.324.24h.058a1.2 1.2 0 0 0 .727-1.098v-.123a1.455 1.455 0 0 1 2.91 0v.065a1.2 1.2 0 0 0 .727 1.098 1.2 1.2 0 0 0 1.323-.24l.044-.043a1.455 1.455 0 1 1 2.058 2.058l-.043.043a1.2 1.2 0 0 0-.24 1.324v.058a1.2 1.2 0 0 0 1.098.727h.123a1.455 1.455 0 1 1 0 2.91h-.065a1.2 1.2 0 0 0-1.098.727z" />
        </g>
      </svg>
    </div>
  )
}

export default memo(UserManagementIcon)
