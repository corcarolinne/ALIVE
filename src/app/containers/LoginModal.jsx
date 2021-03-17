import React, { memo, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Button, TextField, makeStyles, Typography } from '@material-ui/core'
import AliveLogoDark from '../../assets/icons/AliveLogoDark'

import AliveModal from '../components/AliveModal'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  signInButton: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.text,
  },
  forgotPasswordLink: {
    margin: '20px 0px 30px',
    textDecoration: 'underline',
  },

  createAccountButton: {
    backgroundColor: theme.palette.primary.dark,
    marginTop: theme.spacing(1),
  },
}))

const LoginModal = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()
  return (
    <>
      <Button color="primary" onClick={handleOpen}>
        Sign In
      </Button>
      <AliveModal open={open} onClose={handleClose} title={<AliveLogoDark />}>
        <form className={classes.root} noValidate autoComplete="off" color="theme.palette.primary.text">
          <TextField id="username-input" label="Username" variant="filled" fullWidth />
          <TextField id="password-input" label="Password" type="password" variant="filled" fullWidth />
          <Button className={classes.signInButton} variant="contained" color="secondary">
            Sign In
          </Button>
          <Typography className={classes.forgotPasswordLink}>Forgot Password?</Typography>
          <Button className={classes.createAccountButton} variant="contained">
            Create an Account
          </Button>
        </form>
      </AliveModal>
    </>
  )
}

LoginModal.propTypes = {}

LoginModal.defaultProps = {}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {}

export default memo(connect(mapStateToProps, mapDispatchToProps)(LoginModal))
