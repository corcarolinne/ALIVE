import React, { memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import identity from 'lodash/identity'
import debounce from 'lodash/debounce'

import SearchIconButton from '../../assets/icons/SearchIconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    transition: 'width 2s',
    height: '42px',
    background: 'rgb(14, 14, 14, 0.4)',
    padding: '0 0 8px 20px',
    borderRadius: '60px',
    border: ({ isOpen }) => (isOpen ? `1px solid ${theme.palette.primary.main}` : '1px solid transparent'),

    [theme.breakpoints.only('xs')]: {
      marginLeft: '20px',
      background: ({ isOpen }) => (isOpen ? 'rgb(14, 14, 14, 0.4)' : 'transparent'),
      padding: ({ isOpen }) => (isOpen ? '0 0 8px 20px' : '0 4px 0 0'),
    },
  },
  textField: {
    transition: 'width .2s',
    height: '42px',
    width: ({ isOpen }) => (isOpen ? '500px' : '207px'),

    [theme.breakpoints.only('xs')]: {
      width: ({ isOpen }) => (isOpen ? '71.5vw' : '42px'),
    },
  },
  inputField: {
    color: ({ isOpen }) => (isOpen ? 'white' : 'transparent'),
  },
}))

const SearchField = ({ id, options, isLoading, getOptionLabel, onChange, onRequestOptions }) => {
  const [autoCompleteValue, setAutoCompleteValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setOpen] = useState(false)
  const classes = useStyles({ isOpen })
  const loading = isOpen && isLoading

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  const handleClose = useCallback(() => {
    setOpen(false)
    setInputValue('')
  }, [setOpen])

  const handleChange = useCallback(
    (event, value) => {
      if (event?.target?.value === '') {
        onChange('')
        setAutoCompleteValue('')
      } else if (value || inputValue !== '') {
        onChange(value || inputValue)
        setAutoCompleteValue(value || inputValue)
        setOpen(false)
      } else {
        handleOpen()
      }
    },
    [inputValue, onChange, handleOpen]
  )

  const debouncedOptionsRequest = useCallback(debounce(onRequestOptions, 500), [])

  const handleTextFieldChange = useCallback(
    (event) => {
      setInputValue(event?.target?.value || '')
      debouncedOptionsRequest(event?.target?.value || '')
    },
    [setInputValue, debouncedOptionsRequest]
  )

  return (
    <Autocomplete
      id={id}
      className={classes.root}
      value={autoCompleteValue}
      open={isOpen && inputValue !== ''}
      onOpen={handleOpen}
      onClose={handleClose}
      onBlur={handleClose}
      getOptionLabel={getOptionLabel}
      options={options}
      loading={loading}
      onChange={handleChange}
      onFocus={handleOpen}
      freeSolo
      renderInput={(params) => (
        <TextField
          className={classes.textField}
          {...params}
          placeholder="Search"
          value={inputValue}
          onChange={handleTextFieldChange}
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
            className: classes.inputField,
            endAdornment: <SearchIconButton isActive={isOpen} onClick={handleChange} />,
          }}
        />
      )}
    />
  )
}

SearchField.propTypes = {
  id: PropTypes.string,
  options: PropTypes.array,
  isLoading: PropTypes.bool,
  getOptionLabel: PropTypes.func,
  onChange: PropTypes.func,
  onRequestOptions: PropTypes.func,
}

SearchField.defaultProps = {
  id: 'search-field',
  options: [],
  isLoading: false,
  getOptionLabel: identity,
  onChange: identity,
  onRequestOptions: identity,
}

export default memo(SearchField)
