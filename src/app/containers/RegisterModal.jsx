import React, { memo, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Button, TextField, makeStyles, FormControlLabel, Checkbox } from '@material-ui/core'

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

const RegisterModal = () => {
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
          <TextField id="email-input" label="Email" variant="filled" fullWidth />
          <TextField id="username-input" label="Username" variant="filled" fullWidth />
          <TextField id="password-input" label="Password" type="password" variant="filled" fullWidth />
          <FormControlLabel
            className={classes.checkbox}
            control={<Checkbox name="checkedTerms" />}
            label="I am at least 16 years old and I accept the Terms of Use."
          />
          <Button variant="contained" color="secondary" style={{ margin: '0 5px' }}>
            Sign Up
          </Button>
        </form>
      </AliveModal>
    </>
  )
}

RegisterModal.propTypes = {}

RegisterModal.defaultProps = {}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {}

export default memo(connect(mapStateToProps, mapDispatchToProps)(RegisterModal))
