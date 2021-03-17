// import React, { memo } from 'react'
// import PropTypes from 'prop-types'

// const CreatorAvatar = ({ className, src, width, height }) => (
//   <div
//     style={{
//       display: 'flex',
//       alignItems: 'center',
//       height: '112px',
//     }}
//     className={className}
//   >
//     <div
//       style={{
//         backgroundImage: `url(${src})`,
//         width,
//         height,
//         position: 'absolute',
//       }}
//     />
//     <svg
//       style={{
//         marginBottom: '-10px',
//         marginLeft: '-10px',
//         zIndex: 2,
//       }}
//       xmlns="http://www.w3.org/2000/svg"
//       xlink="http://www.w3.org/1999/xlink"
//       width="122px"
//       height="122px"
//       viewBox="0 0 41 38"
//     >
//       <defs>
//         <path
//           id="29lczsz28a"
//           d="M36.948 26.261l-27.37 6.587C6.23 33.653 3 31.16 3 27.768V5.232C3 1.919 6.09-.56 9
// .388.109l27.37 5.547c2.47.5 4.242 2.64 4.242 5.121v10.405c0 2.41-1.673 4.507-4.052 5.08"
//         />
//         <pattern id="img1" patternUnits="userSpaceOnUse" width="122px" height="122px">
//           <image href={src} x="0" y="0" width="122px" height="122px" />
//         </pattern>
//       </defs>
//       <g fill="none" fillRule="evenodd">
//         <path fill="#cd4dcc  " d="M5 35.5C5 36.88 3.88 38 2.5 38S0 36.88 0 35.5 1.12 33 2.5 33 5 34.12 5 35.5" />
//         <use fill="#044B94" fillOpacity="0.4" href="#29lczsz28a" />
//       </g>
//     </svg>
//   </div>
// )

// CreatorAvatar.propTypes = {
//   className: PropTypes.string,
//   src: PropTypes.string,
//   width: PropTypes.string,
//   height: PropTypes.string,
// }

// CreatorAvatar.defaultProps = {
//   className: '',
//   src: '',
//   width: '41',
//   height: '38',
// }

// export default memo(CreatorAvatar)

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'

const CreatorAvatar = ({ className, src, width, height }) => {
  const theme = useTheme()
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 41 38"
    >
      <defs>
        <path
          id="29lczsz28a"
          d="M36.948 26.261l-27.37 6.587C6.23 33.653 3 31.16 3 27.768V5.232C3 1.919 6.09-.56 9.388.109l27.37 5.547c2.47.5 4.242 2.64 4.242 5.121v10.405c0 2.41-1.673 4.507-4.052 5.08"
        />
        <pattern id={src} patternUnits="userSpaceOnUse" width="100%" height={height}>
          <image width="100%" height="35px" preserveAspectRatio="xMidYMid slice" href={src} />
        </pattern>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill={theme.palette.secondary.main}
          d="M5 35.5C5 36.88 3.88 38 2.5 38S0 36.88 0 35.5 1.12 33 2.5 33 5 34.12 5 35.5"
        />
        <use fill={`url(#${src})`} href="#29lczsz28a" />
      </g>
    </svg>
  )
}

CreatorAvatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

CreatorAvatar.defaultProps = {
  className: '',
  src: '',
  width: '41',
  height: '38',
}

export default memo(CreatorAvatar)
