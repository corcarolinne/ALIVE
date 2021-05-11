// type
export const SET_EX = 'home/SET_EX'
export const CHANGE_REGISTER_FIELD = 'home/CHANGE_REGISTER_FIELD'

// creator
export const setEx = (value) => ({
  type: SET_EX,
  payload: value,
})

export const changeRegisterField = (field, value) => ({
  type: CHANGE_REGISTER_FIELD,
  payload: {
    field,
    value,
  },
})
