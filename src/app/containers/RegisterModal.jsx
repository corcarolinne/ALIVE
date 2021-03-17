import React, { memo, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Button } from '@material-ui/core'

import AliveModal from '../components/AliveModal'

const RegisterModal = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button variant="contained" color="secondary" style={{ margin: '0 5px' }} onClick={handleOpen}>
        Join Now
      </Button>
      <AliveModal open={open} onClose={handleClose} title="Get started">
        Se divirta!
      </AliveModal>
    </>
  )
}

RegisterModal.propTypes = {}

RegisterModal.defaultProps = {}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {}

export default memo(connect(mapStateToProps, mapDispatchToProps)(RegisterModal))
