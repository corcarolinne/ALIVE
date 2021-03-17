import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import identity from 'lodash/identity'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '410px',
    height: 'auto',
    padding: theme.spacing(4, 4, 3),
    outline: 'none',
    color: 'black',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: theme.palette.primary.text,
  },
  backdrop: {
    background: '#212121BF 0% 0% no-repeat padding-box',
  },
}))

const AliveModal = ({ className, open, title, onClose, children }) => {
  const classes = useStyles()
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        className: classes.backdrop,
      }}
    >
      <Fade in={open}>
        <Paper className={cx(classes.paper, className)}>
          <Typography className={classes.modalTitle} color="textSecondary">
            {title}
          </Typography>
          <Divider className={classes.divider} />
          {children}
        </Paper>
      </Fade>
    </Modal>
  )
}

AliveModal.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

AliveModal.defaultProps = {
  className: '',
  open: false,
  title: '',
  onClose: identity,
  children: null,
}

export default memo(AliveModal)
