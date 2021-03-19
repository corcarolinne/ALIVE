import React, { memo, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  Button,
  TextField,
  makeStyles,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
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
  modalWrapper: {
    height: '90vh',
    width: '90vw',
  },
  deleteAccountButton: {
    backgroundColor: theme.palette.primary.dark,
    marginTop: theme.spacing(1),
  },
}))

const SettingsModal = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))
  const [value, setSelectedPronoun] = React.useState('He/him')
  const [open, setOpen] = useState(false)

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const handlePronounChange = (pronoun) => {
    setSelectedPronoun(pronoun.target.value)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()
  return (
    <>
      <Button color="primary" style={{ margin: '0 5px' }} onClick={handleOpen}>
        Profile
      </Button>
      <AliveModal open={open} className={classes.modalWrapper} onClose={handleClose} title="Profile Settings">
        <form className={classes.root} noValidate autoComplete="off" color="theme.palette.primary.text">
          <TextField color="secondary" id="fname-input" label="First Name" variant="filled" fullWidth />
          <TextField color="secondary" id="lname-input" label="Last Name" variant="filled" fullWidth />
          <TextField color="secondary" id="password-input" label="Password" type="password" variant="filled" fullWidth />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                color="secondary"
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <FormControl component="fieldset">
            <FormLabel component="legend" color="secondary">
              Pronouns
            </FormLabel>
            <RadioGroup aria-label="pronouns" name="pronouns" value={value} onChange={handlePronounChange}>
              <FormControlLabel value="masculine" control={<Radio />} label="He/him" />
              <FormControlLabel value="feminine" control={<Radio />} label="She/her" />
              <FormControlLabel value="neutral" control={<Radio />} label="They/them" />
            </RadioGroup>
          </FormControl>
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
            color="secondary"
          />
          <Button className={classes.deleteAccountButton} variant="contained">
            Delete Account
          </Button>
          <Button variant="contained" color="secondary" style={{ margin: '0 5px' }}>
            Update Profile
          </Button>
        </form>
      </AliveModal>
    </>
  )
}

SettingsModal.propTypes = {}

SettingsModal.defaultProps = {}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {}

export default memo(connect(mapStateToProps, mapDispatchToProps)(SettingsModal))
