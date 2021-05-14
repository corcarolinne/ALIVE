import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Button, TextField, makeStyles } from '@material-ui/core'
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
  loginValues: modules.state.selectors.getLoginValues,
})

const mapDispatchToProps = {
  changeLoginField: modules.state.actions.changeLoginField,
  login: modules.state.actions.login,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(LoginModal))
