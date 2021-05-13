import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Button, TextField, makeStyles, Typography } from '@material-ui/core'
import AliveLogoDark from '../../assets/icons/AliveLogoDark'

import modules from '../modules'

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
    backgroundColor: theme.palette.secondary.main,
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

const LoginModal = ({ loginValues, changeLoginField, login }) => {
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
          <TextField
            id="username-input"
            label="Username"
            variant="filled"
            fullWidth
            value={loginValues.username}
            onChange={(event) => changeLoginField('username', event.target.value)}
          />
          <TextField
            id="password-input"
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            value={loginValues.password}
            onChange={(event) => changeLoginField('password', event.target.value)}
          />
          <Button className={classes.signInButton} variant="contained" color="secondary" onClick={login}>
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

LoginModal.propTypes = {
  loginValues: PropTypes.object.isRequired,
  changeLoginField: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
}

LoginModal.defaultProps = {}

const mapStateToProps = createStructuredSelector({
  loginValues: modules.auth.selectors.getLoginValues,
})

const mapDispatchToProps = {
  changeLoginField: modules.auth.actions.changeLoginField,
  login: modules.auth.actions.login,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(LoginModal))
