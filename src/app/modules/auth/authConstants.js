/**
 * http://jaysoo.ca/2016/02/28/organizing-redux-application/
 */
export const MODULE_NAME = 'auth'

export const ERRORS = {
  GENERAL_ERROR: 'Something went wrong.',
  PASSWORD_CONFIRMATION: 'Password confirmation doesn\'t match with the choosen password.',
  PASSWORD_VALIDATION: 'Your password should have at least 8 characters with upper case and lower case characters.',
  PASSWORD_SHOULD_HAVE_8_CHARS: 'Your password should have at least 8.',
  PASSWORD_SHOULD_NOT_HAVE_SPACES: 'Your password shouldn\'t have spaces.',
  PASSWORD_SHOULD_HAVE_UPPERCASE: 'Your password should contain at leat one upper case character.',
  PASSWORD_SHOULD_HAVE_LOWERCASE: 'Your password should contain at leat one lower case character.',
  EMAIL_PASSWORD_IS_REQUIRED: 'Please fill email, password and password confirmation fields.',
  EMAIL_ALREADY_EXISTS: 'This email is already registered.',
  FILL_REQUIRED_FIELD: 'Please fill all required fields.',
}

export const getErrorsMessages = (graphQLErrors = []) => {
  if (!graphQLErrors[0]) {
    return ERRORS.GENERAL_ERROR
  }

  if (
    graphQLErrors[0].extensions.code === 'INTERNAL_SERVER_ERROR'
    && graphQLErrors[0].extensions.exception.errors[0].message === 'usersEmailUnique must be unique'
  ) {
    return ERRORS.EMAIL_ALREADY_EXISTS
  }

  if (graphQLErrors[0].extensions.code === 'BAD_USER_INPUT' && graphQLErrors[0].extensions.exception.details[0].password) {
    const passwordErrors = graphQLErrors[0].extensions.exception.details[0].password
    if (passwordErrors.includes('uppercase') && passwordErrors.includes('lowercase') && passwordErrors.includes('min')) {
      return ERRORS.PASSWORD_VALIDATION
    }

    return passwordErrors.reduce((acc, error) => {
      if (error === 'spaces') {
        return `${acc}${ERRORS.PASSWORD_SHOULD_NOT_HAVE_SPACES}\n`
      }
      if (error === 'uppercase') {
        return `${acc}${ERRORS.PASSWORD_SHOULD_HAVE_UPPERCASE}\n`
      }
      if (error === 'lowercase') {
        return `${acc}${ERRORS.PASSWORD_SHOULD_HAVE_LOWERCASE}\n`
      }
      if (error === 'min') {
        return `${acc}${ERRORS.PASSWORD_SHOULD_HAVE_8_CHARS}\n`
      }
      return ''
    }, '')
  }

  if (graphQLErrors[0].extensions.code === 'BAD_USER_INPUT' && graphQLErrors[0].extensions.exception.details[0].email) {
    const emailError = graphQLErrors[0].extensions.exception.details[0].email
    if (emailError === 'INVALID') {
      return ERRORS.EMAIL_PASSWORD_IS_REQUIRED
    }
  }

  return ERRORS.GENERAL_ERROR
}
