import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import AliveLogo from '../../assets/icons/AliveLogo'

const useStyles = makeStyles(() => ({
  header: {
    transition: 'background-color 1s ease',
    backgroundColor: 'black',
  },
  grow: {
    flexGrow: 1,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const Header = ({ children }) => {
  const trigger = useScrollTrigger({ disableHysteresis: true })
  const shouldShowBackGround = trigger
  const classes = useStyles(shouldShowBackGround)

  return (
    <AppBar className={classes.header} position="fixed">
      <Toolbar>
        <NavLink to="/">
          <AliveLogo />
        </NavLink>
        <div className={classes.grow} />
        <div className={classes.content}>{children}</div>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

Header.defaultProps = {
  children: null,
}

export default memo(Header)
