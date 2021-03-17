import React, { memo } from 'react'
import { useTheme } from '@material-ui/core/styles'

const ChannelIcon = () => {
  const theme = useTheme()
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15">
        <g fill={theme.palette.secondary.main} fillRule="nonzero">
          <path d="M15.375 12.813H.625a.625.625 0 1 0 0 1.25h14.75a.625.625 0 1 0 0-1.25zM5.877 8.57a.625.625 0 0 0 .625 0l3.621-2.091a.625.625 0 0 0 0-1.083l-3.621-2.09a.625.625 0 0 0-.938.54V8.03c0 .223.12.43.313.54zm.937-3.641l1.747 1.008-1.747 1.01V4.928z" />
          <path d="M15.375 0H.625A.625.625 0 0 0 0 .625V11.25c0 .345.28.625.625.625h14.75c.345 0 .625-.28.625-.625V.625A.625.625 0 0 0 15.375 0zm-.625 10.625H1.25V1.25h13.5v9.375z" />
        </g>
      </svg>
    </div>
  )
}

export default memo(ChannelIcon)
