import React, { memo, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Button, TextField, makeStyles, FormControlLabel, Checkbox } from '@material-ui/core'

import AliveModal from '../components/AliveModal'

const RegisterModal = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }))

  const classes = useStyles()
  return (
    <>
      <Button variant="contained" color="secondary" style={{ margin: '0 5px' }} onClick={handleOpen}>
        Join Now
      </Button>
      <AliveModal open={open} onClose={handleClose} title="Get started" color="primary">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="email-input" label="Email" variant="filled" />
          <TextField id="username-input" label="Username" variant="filled" />
          <TextField id="password-input" label="Password" type="password" variant="filled" />
          <Button variant="contained" color="secondary" style={{ margin: '0 5px' }}>
            Sign Up
          </Button>
          <FormControlLabel
            control={<Checkbox name="checkedTerms" />}
            label="I am at least 16 years old and I accept the Terms of Use."
          />
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
