import React, { memo } from 'react'
import { useTheme } from '@material-ui/core/styles'

const StudioIcon = () => {
  const theme = useTheme()
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <g fill={theme.palette.secondary.main} fillRule="nonzero" stroke={theme.palette.secondary.main} strokeWidth=".3">
          <path d="M16.648 6.994H1.982a.333.333 0 0 0-.334.333v8c0 .92.748 1.667 1.667 1.667h12c.92 0 1.667-.748 1.667-1.667v-8a.333.333 0 0 0-.334-.333zm-.333 8.333c0 .552-.449 1-1 1h-12c-.551 0-1-.448-1-1V7.661h14v7.666z" />
          <path d="M16.971 3.91l-.567-2.153a1.007 1.007 0 0 0-1.196-.732L1.778 4.21a.992.992 0 0 0-.63.452.989.989 0 0 0-.117.766l.628 2.483a.332.332 0 0 0 .405.241.333.333 0 0 0 .24-.404l-.036-.145L16.722 4.32a.336.336 0 0 0 .249-.41zM2.105 6.956l-.428-1.69a.335.335 0 0 1 .252-.407l13.43-3.186a.337.337 0 0 1 .398.248l.481 1.823L2.105 6.957z" />
          <path d="M4.798 7.029a.336.336 0 0 0-.448.15L3.016 9.844a.334.334 0 0 0 .598.298l1.333-2.667a.334.334 0 0 0-.15-.447zM8.13 7.029a.335.335 0 0 0-.447.15L6.35 9.844a.334.334 0 0 0 .596.298L8.28 7.476a.334.334 0 0 0-.15-.447zM11.464 7.029a.335.335 0 0 0-.448.15L9.683 9.844a.334.334 0 0 0 .597.298l1.333-2.667a.334.334 0 0 0-.15-.447zM14.797 7.029a.335.335 0 0 0-.447.15l-1.334 2.666a.334.334 0 0 0 .597.298l1.333-2.667a.334.334 0 0 0-.149-.447z" />
          <path d="M16.648 9.66H1.982a.333.333 0 0 0 0 .667h14.666a.333.333 0 1 0 0-.666zM5.205 6.412L2.909 4.116a.334.334 0 0 0-.471.471l2.296 2.297a.335.335 0 0 0 .471 0 .334.334 0 0 0 0-.472zM8.466 5.671L6.168 3.375a.334.334 0 0 0-.471.472l2.297 2.296a.335.335 0 0 0 .472 0 .334.334 0 0 0 0-.472zM11.725 4.93L9.431 2.635a.334.334 0 0 0-.471.471l2.294 2.297a.335.335 0 0 0 .471 0 .334.334 0 0 0 0-.471zM14.982 4.19l-2.294-2.296a.334.334 0 0 0-.472.471l2.295 2.297a.335.335 0 0 0 .471 0 .334.334 0 0 0 0-.471z" />
        </g>
      </svg>
    </div>
  )
}

export default memo(StudioIcon)
