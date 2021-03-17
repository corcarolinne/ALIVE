import React, { memo } from 'react'
import { useTheme } from '@material-ui/core/styles'

const SubscriptionIcon = () => {
  const theme = useTheme()
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21" viewBox="0 0 15 21">
        <path
          fill={theme.palette.secondary.main}
          fillRule="nonzero"
          stroke="#141414"
          strokeWidth=".2"
          d="M7.957 1a6.945 6.945 0 0 0-6.938 6.937c0 1.7.615 3.258 1.634 4.466v7.505a.77.77 0 0 0 1.2.637l4.104-2.782 4.103 2.782a.77.77 0 0 0 1.2-.636v-7.506a6.906 6.906 0 0 0 1.634-4.466A6.945 6.945 0 0 0 7.957 1zm3.766 17.459l-3.335-2.261a.769.769 0 0 0-.863 0l-3.335 2.26V13.76a6.897 6.897 0 0 0 3.767 1.114c1.387 0 2.68-.41 3.766-1.114v4.699zm-3.766-5.122a5.406 5.406 0 0 1-5.4-5.4c0-2.977 2.422-5.4 5.4-5.4 2.977 0 5.4 2.423 5.4 5.4 0 2.977-2.423 5.4-5.4 5.4z"
        />
      </svg>
    </div>
  )
}

export default memo(SubscriptionIcon)
