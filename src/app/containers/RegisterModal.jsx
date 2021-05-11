import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Button, TextField, makeStyles, FormControlLabel, Checkbox } from '@material-ui/core'

import modules from '../modules'

import AliveModal from '../components/AliveModal'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  checkbox: {
    marginTop: '15px',
    marginBottom: '20px',
  },
}))

const RegisterModal = ({ registerValues, changeRegisterField }) => {
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
      <Button variant="contained" color="secondary" style={{ margin: '0 5px' }} onClick={handleOpen}>
        Join Now
      </Button>
      <AliveModal open={open} onClose={handleClose} title="Get started">
        <form className={classes.root} noValidate autoComplete="off" color="theme.palette.primary.text">
          <TextField
            id="email-input"
            label="Email"
            variant="filled"
            fullWidth
            value={registerValues.email}
            onChange={(event) => changeRegisterField('email', event.target.value)}
          />
          <TextField
            id="username-input"
            label="Username"
            variant="filled"
            fullWidth
            value={registerValues.username}
            onChange={(event) => changeRegisterField('username', event.target.value)}
          />
          <TextField
            id="password-input"
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            value={registerValues.password}
            onChange={(event) => changeRegisterField('password', event.target.value)}
          />
          <FormControlLabel
            className={classes.checkbox}
            control={<Checkbox name="checkedTerms" />}
            label="I am at least 16 years old and I accept the Terms of Use."
          />
          <Button variant="contained" color="secondary" style={{ margin: '0 5px' }}>
            Sign up
          </Button>
        </form>
      </AliveModal>
    </>
  )
}

RegisterModal.propTypes = {
  registerValues: PropTypes.object.isRequired,
  changeRegisterField: PropTypes.func.isRequired,
}

RegisterModal.defaultProps = {}

const mapStateToProps = createStructuredSelector({
  registerValues: modules.home.selectors.getRegisterValues,
})

const mapDispatchToProps = {
  changeRegisterField: modules.home.actions.changeRegisterField,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(RegisterModal))
