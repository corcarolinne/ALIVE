import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  searchIconButton: {
    height: '42px',
    width: '48px',
    marginRight: '8px',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:hover > span > $search': {
      stroke: theme.palette.secondary.main,
    },
  },
  search: {
    stroke: ({ isActive }) => (isActive ? theme.palette.primary.main : theme.palette.primary.main),
  },
}))

const SearchIconButton = ({ isActive, ...props }) => {
  const classes = useStyles({ isActive })

  return (
    <IconButton className={classes.searchIconButton} {...props} disableFocusRipple disableRipple>
      <svg className={classes.search} xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
        <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <g transform="translate(1.8 1.8)">
            <circle cx="10.667" cy="10.667" r="10.667" />
            <path d="M24 24l-5.8-5.8" />
          </g>
          <path d="M25.8 25.8L20 20" />
        </g>
      </svg>
    </IconButton>
  )
}

SearchIconButton.propTypes = {
  isActive: PropTypes.bool,
}

SearchIconButton.defaultProps = {
  isActive: false,
}

export default memo(SearchIconButton)
