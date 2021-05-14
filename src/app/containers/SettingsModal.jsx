import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  MenuItem,
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
import modules from '../modules'
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

const SettingsModal = ({ onClick, user, changeProfileField }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
    onClick()
  }

  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()
  return (
    <>
      <MenuItem color="primary" style={{ margin: '0 5px' }} onClick={handleOpen}>
        Profile
      </MenuItem>
      <AliveModal open={open} className={classes.modalWrapper} onClose={handleClose} title="Profile Settings">
        <Grid className={classes.root} container justify="space-around" alignItems="flex-start">
          <Grid item className={classes.avatarEditDiv}>
            <Avatar className={classes.channelAvatar} src={user.avatar} />
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
                      value={user.firstName}
                      onChange={(event) => changeProfileField('firstName', event.target.value)}
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
                      value={user.surname}
                      onChange={(event) => changeProfileField('surname', event.target.value)}
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
                      value={user.password}
                      onChange={(event) => changeProfileField('surname', event.target.value)}
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
                        label="Date of Birth"
                        value={new Date(user.dob)}
                        color="secondary"
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        onChange={(event) => changeProfileField('dob', event.target.value)}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item>
                    <FormControl component="fieldset">
                      <FormLabel component="legend" color="secondary">
                        Pronouns
                      </FormLabel>
                      <RadioGroup aria-label="pronouns" name="pronouns" value={user.pronouns}>
                        <FormControlLabel
                          value="masculine"
                          control={<Radio />}
                          label="He/him"
                          checked={user.pronoun === 'masculine'}
                          onChange={(event) => changeProfileField('pronoun', event.target.value)}
                        />
                        <FormControlLabel
                          value="feminine"
                          control={<Radio />}
                          label="She/her"
                          checked={user.pronoun === 'feminine'}
                          onChange={(event) => changeProfileField('pronoun', event.target.value)}
                        />
                        <FormControlLabel
                          value="neutral"
                          control={<Radio />}
                          label="They/them"
                          checked={user.pronoun === 'neutral'}
                          onChange={(event) => changeProfileField('pronoun', event.target.value)}
                        />
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
                  label="Bio"
                  multiline
                  rows={4}
                  value={user.bio}
                  variant="filled"
                  color="secondary"
                  onChange={(event) => changeProfileField('bio', event.target.value)}
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

SettingsModal.propTypes = {
  onClick: PropTypes.func,
  user: PropTypes.object.isRequired,
  changeProfileField: PropTypes.func.isRequired,
}

SettingsModal.defaultProps = {
  onClick: () => {},
}

const mapStateToProps = createStructuredSelector({
  user: modules.state.selectors.getUser,
})

const mapDispatchToProps = {
  changeProfileField: modules.state.actions.changeProfileField,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(SettingsModal))
