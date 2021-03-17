import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import cx from 'classnames'

const useStyles = makeStyles((theme) => ({
  uploadImageIconButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:hover > span > $uploadImage': {
      fill: theme.palette.secondary.main,
    },
  },
  uploadImage: {
    fill: theme.palette.grey.default,
  },
}))

const UploadImageIconButton = ({ className, ...props }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <IconButton className={cx(classes.uploadImageIconButton, className)} {...props} disableFocusRipple disableRipple>
      <svg
        className={classes.uploadImage}
        xmlns="http://www.w3.org/2000/svg"
        width="73.717"
        height="89.382"
        viewBox="0 0 73.717 89.382"
      >
        <g transform="translate(0 0)">
          <path
            fill={theme.palette.secondary.main}
            d="M9.917,18.189,20.975,7.869V37.724a2.212,2.212,0,1,0,4.423,0V7.869l11.058,10.32c.369.369,1.474.737,1.843.369a2.878,2.878,0,0,0,1.474-1.474c0-.737,0-1.474-.737-1.843L24.292,1.6c-.369-.737-1.474-.737-2.58,0L6.969,15.241A2.762,2.762,0,0,0,6.6,17.084a1.586,1.586,0,0,0,1.474,1.474A1.621,1.621,0,0,0,9.917,18.189Z"
            transform="translate(14.041 -1.05)"
          />
          <path
            fill={theme.palette.secondary.main}
            d="M64.4,9.1H54.445a2.125,2.125,0,0,0-2.212,2.212,1.955,1.955,0,0,0,2.212,2.212H64.4a6.212,6.212,0,0,1,6.266,6.266v39.07A6.212,6.212,0,0,1,64.4,65.125H11.32a6.212,6.212,0,0,1-6.266-6.266V19.42a6.212,6.212,0,0,1,6.266-6.266h9.952a1.741,1.741,0,0,0,1.843-1.843A2.064,2.064,0,0,0,21.272,9.1H11.32A10.3,10.3,0,0,0,1,19.42v39.07a10.3,10.3,0,0,0,10.32,10.32H64.4a10.3,10.3,0,0,0,10.32-10.32V19.42A10.3,10.3,0,0,0,64.4,9.1Z"
            transform="translate(-1 20.571)"
          />
          <path
            fill="none"
            stroke={theme.palette.secondary.main}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.5px"
            d="M49.9,40.37a3.323,3.323,0,0,0-.369-1.843L36.263,16.043A3.759,3.759,0,0,0,33.314,14.2a3.759,3.759,0,0,0-2.949,1.843L22.256,30.049,18.939,24.52a2.229,2.229,0,0,0-2.212-1.106,2.627,2.627,0,0,0-2.212,1.106L5.3,40.37a3.148,3.148,0,0,0,0,2.58,2.229,2.229,0,0,0,2.212,1.106h38.7a3.283,3.283,0,0,0,2.949-1.843c.737-.369.737-1.106.737-1.843Z"
            transform="translate(9.811 34.269)"
          />
          <circle fill={theme.palette.secondary.main} cx="3.686" cy="3.686" r="3.686" transform="translate(26.907 44.783)" />
        </g>
      </svg>
    </IconButton>
  )
}

UploadImageIconButton.propTypes = {
  className: PropTypes.string,
}

UploadImageIconButton.defaultProps = {
  className: '',
}

export default memo(UploadImageIconButton)
