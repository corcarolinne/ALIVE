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
  Avatar,
  IconButton,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import AliveModal from '../components/AliveModal'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 25,
    height: '100%',
  },
  modalWrapper: {
    height: '70h',
    width: '70vw',
  },
  deleteAccountButton: {
    backgroundColor: theme.palette.primary.dark,
  },
  channelAvatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  avatarEditDiv: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: 'auto',
  },
  field: {
    width: 400,
  },
  multilineField: {
    width: '100%',
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
        <Grid className={classes.root} container justify="space-around" alignItems="flex-start">
          <Grid item className={classes.avatarEditDiv}>
            <Avatar
              className={classes.channelAvatar}
              src="https://viewer-user-avatars.s3-eu-west-1.amazonaws.com/9c7e69141a9b9898_c5b37c5b-f8f8-4e2f-ad07-6ee2d9ff2979"
            />
            <IconButton style={{ position: 'absolute' }} aria-label="edit">
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid
            component="form"
            container
            direction="column"
            className={classes.form}
            noValidate
            autoComplete="off"
            color="theme.palette.primary.text"
            spacing={2}
          >
            <Grid container item spacing={2} justify="space-between">
              <Grid item>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      className={classes.field}
                      color="secondary"
                      id="fname-input"
                      label="First Name"
                      variant="filled"
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      className={classes.field}
                      color="secondary"
                      id="lname-input"
                      label="Last Name"
                      variant="filled"
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      className={classes.field}
                      color="secondary"
                      id="password-input"
                      label="Password"
                      type="password"
                      variant="filled"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item>
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
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  className={classes.multilineField}
                  id="filled-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  variant="filled"
                  color="secondary"
                />
              </Grid>

              <Grid item container justify="space-between">
                <Grid item>
                  <Button className={classes.deleteAccountButton} variant="contained">
                    Delete Account
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="contained" color="secondary" style={{ margin: '0 5px' }}>
                    Update Profile
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AliveModal>
    </>
  )
}

SettingsModal.propTypes = {}

SettingsModal.defaultProps = {}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {}

export default memo(connect(mapStateToProps, mapDispatchToProps)(SettingsModal))
