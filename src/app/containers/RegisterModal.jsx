import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Button, TextField, makeStyles, FormControlLabel, Checkbox } from '@material-ui/core'

import modules from '../modules'

import AliveModal from '../components/AliveModal'
import api from '../graphql'

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

const RegisterModal = ({ registerValues, changeRegisterField, requestApiCall }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const register = (event) => {
    event.preventDefault()
    requestApiCall(
      api.callNames.createUser,
      {
        registerValues: {
          ...registerValues,
          following: [],
          obs_config_rmrplink: 'rtmps://b43189d95416.global-contribute.live-video.net:443/app/',
          obs_config_streamkey: 'sk_eu-west-1_nUmy0onKaBCh_LARWfMUkrSw9eL3LGRs7W9fCBXfWOM',
          live_uri:
            'https://b43189d95416.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.248056333272.channel.X3k9AgkWFOnT.m3u8',
          live_image:
            'https://scontent-dub4-1.xx.fbcdn.net/v/t1.6435-9/110202748_114186017041375_3516819019169033276_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=4NeaVTtcN2QAX_Df_R0&_nc_ht=scontent-dub4-1.xx&oh=ce9ddd7b4b72556f6aa289c2b9fc363e&oe=60C3BE38',
        },
      },
      modules.state.actions.CREATE_USER
    )
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
            id="firstname-input"
            label="First Name"
            variant="filled"
            fullWidth
            value={registerValues.firstName}
            onChange={(event) => changeRegisterField('firstName', event.target.value)}
          />

          <TextField
            id="surname-input"
            label="Surname"
            variant="filled"
            fullWidth
            value={registerValues.surname}
            onChange={(event) => changeRegisterField('surname', event.target.value)}
          />
          <TextField
            id="username-input"
            label="Username"
            variant="filled"
            fullWidth
            value={registerValues.displayName}
            onChange={(event) => changeRegisterField('displayName', event.target.value)}
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
          <TextField
            id="avatar-input"
            label="Put a url to a avatar image"
            variant="filled"
            fullWidth
            value={registerValues.avatar}
            onChange={(event) => changeRegisterField('avatar', event.target.value)}
          />
          <TextField
            id="avatar-input"
            label="Put your date of birth"
            variant="filled"
            fullWidth
            value={registerValues.dob}
            onChange={(event) => changeRegisterField('dob', event.target.value)}
          />
          <TextField
            id="bio-input"
            label="Put your Bio"
            variant="filled"
            fullWidth
            value={registerValues.bio}
            onChange={(event) => changeRegisterField('bio', event.target.value)}
          />
          <FormControlLabel
            className={classes.checkbox}
            control={<Checkbox name="checkedTerms" />}
            label="I am at least 16 years old and I accept the Terms of Use."
          />
          <Button variant="contained" color="secondary" style={{ margin: '0 5px' }} onClick={register}>
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
  requestApiCall: PropTypes.func.isRequired,
}

RegisterModal.defaultProps = {}

const mapStateToProps = createStructuredSelector({
  registerValues: modules.state.selectors.getRegisterValues,
})

const mapDispatchToProps = {
  changeRegisterField: modules.state.actions.changeRegisterField,
  requestApiCall: modules.connectivity.actions.requestApiCall,
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(RegisterModal))
