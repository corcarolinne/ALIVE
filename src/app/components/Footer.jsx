import React, { memo } from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  footer: {
    width: '100vw',
    height: '42.7vh',
    backgroundColor: '#202020',
    marginTop: '10vh',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return <div className={classes.footer} />
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default memo(Footer)
