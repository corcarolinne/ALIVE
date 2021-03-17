import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  uploadVideoIconButton: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:hover > span > $uploadVideo': {
      fill: theme.palette.secondary.main,
    },
  },
  uploadVideo: {
    fill: theme.palette.grey.default,
  },
}))

const UploadVideoIconButton = (props) => {
  const classes = useStyles()

  return (
    <IconButton className={classes.uploadVideoIconButton} {...props} disableFocusRipple disableRipple>
      <svg className={classes.uploadVideo} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
        <g fillRule="nonzero">
          <path d="M23.9 4.1A13.908 13.908 0 0 0 14 0c-3.74 0-7.255 1.456-9.9 4.1A13.909 13.909 0 0 0 0 14c0 3.74 1.456 7.255 4.1 9.9A13.909 13.909 0 0 0 14 28c3.74 0 7.255-1.456 9.9-4.1A13.909 13.909 0 0 0 28 14c0-3.74-1.456-7.255-4.1-9.9zM14 26.36C7.185 26.36 1.64 20.814 1.64 14 1.64 7.185 7.186 1.64 14 1.64c6.815 0 12.36 5.545 12.36 12.36 0 6.815-5.545 12.36-12.36 12.36z" />
          <path d="M21.904 9.707a.804.804 0 0 0-.785-.035l-2.862 1.434v-.135A2.97 2.97 0 0 0 15.293 8H9.25a2.971 2.971 0 0 0-2.964 2.971v6.058A2.971 2.971 0 0 0 9.25 20h6.043a2.971 2.971 0 0 0 2.964-2.971v-.135l2.862 1.434a.804.804 0 0 0 1.167-.722v-7.212c0-.28-.145-.54-.382-.687zm-5.259 7.322c0 .747-.607 1.355-1.352 1.355H9.25a1.355 1.355 0 0 1-1.352-1.355V10.97c0-.747.606-1.355 1.352-1.355h6.043c.745 0 1.352.608 1.352 1.355v6.058zm4.029-.73l-2.417-1.212v-2.174l2.417-1.212v4.597z" />
          <path d="M23.9 4.1A13.908 13.908 0 0 0 14 0c-3.74 0-7.255 1.456-9.9 4.1A13.909 13.909 0 0 0 0 14c0 3.74 1.456 7.255 4.1 9.9A13.909 13.909 0 0 0 14 28c3.74 0 7.255-1.456 9.9-4.1A13.909 13.909 0 0 0 28 14c0-3.74-1.456-7.255-4.1-9.9zM14 26.36C7.185 26.36 1.64 20.814 1.64 14 1.64 7.185 7.186 1.64 14 1.64c6.815 0 12.36 5.545 12.36 12.36 0 6.815-5.545 12.36-12.36 12.36z" />
          <path d="M21.904 9.707a.804.804 0 0 0-.785-.035l-2.862 1.434v-.135A2.97 2.97 0 0 0 15.293 8H9.25a2.971 2.971 0 0 0-2.964 2.971v6.058A2.971 2.971 0 0 0 9.25 20h6.043a2.971 2.971 0 0 0 2.964-2.971v-.135l2.862 1.434a.804.804 0 0 0 1.167-.722v-7.212c0-.28-.145-.54-.382-.687zm-5.259 7.322c0 .747-.607 1.355-1.352 1.355H9.25a1.355 1.355 0 0 1-1.352-1.355V10.97c0-.747.606-1.355 1.352-1.355h6.043c.745 0 1.352.608 1.352 1.355v6.058zm4.029-.73l-2.417-1.212v-2.174l2.417-1.212v4.597z" />
        </g>
      </svg>
    </IconButton>
  )
}

export default memo(UploadVideoIconButton)
