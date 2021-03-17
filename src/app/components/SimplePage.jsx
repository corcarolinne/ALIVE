import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '131px',
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    maxWidth: '70vw',
  },
  flexColumn: {
    paddingTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    padding: '0px 50px',

    [theme.breakpoints.only('xs')]: {
      paddingTop: '70px',
      padding: '0px 10px',
      width: '100vw',
    },
  },
  title: { fontSize: '20px' },
  divider: { margin: '10px 0px 10px 0px' },
}))

const SimplePage = ({ className, layout, children, title, ...props }) => {
  const classes = useStyles()

  return (
    <Grid
      className={cx({
        [classes.root]: true,
        [classes.flexColumn]: layout === 'column',
      })}
      container
      {...props}
    >
      {title && (
        <>
          <Typography className={classes.title}>{title}</Typography>
          <Divider className={classes.divider} />
        </>
      )}
      {children}
    </Grid>
  )
}

SimplePage.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  layout: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

SimplePage.defaultProps = {
  className: '',
  title: '',
  layout: '',
  children: null,
}

export default SimplePage
