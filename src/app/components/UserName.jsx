import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import identity from 'lodash/fp/identity'
import cx from 'classnames'

import CreatorAvatar from '../../assets/icons/CreatorAvatar'

const useStyles = makeStyles((theme) => ({
  userNameWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: '20px',
    height: '48px',
    width: '48px',
    display: 'flex',
    alignItems: 'center',
  },
  userName: {
    fontSize: '20px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 0.8,
    letterSpacing: '-0.13px',
    textAlign: 'right',
    color: theme.palette.grey.default,
  },
}))

const UserName = ({ customStyles, avatarSrc, userName, isCreator, onClick }) => {
  const classes = useStyles()
  const AvatarComponent = isCreator ? CreatorAvatar : Avatar

  return (
    <div className={cx(customStyles.main, classes.userNameWrapper)}>
      <AvatarComponent
        aria-label="recipe"
        className={cx(customStyles.avatar, classes.avatar)}
        src={avatarSrc}
        onClick={onClick}
      />
      <Typography className={cx(customStyles.userName, classes.userName)}>{userName}</Typography>
    </div>
  )
}

UserName.propTypes = {
  customStyles: PropTypes.shape({
    main: PropTypes.string,
    avatar: PropTypes.string,
    userName: PropTypes.string,
  }),
  avatarSrc: PropTypes.string,
  userName: PropTypes.string,
  isCreator: PropTypes.bool,
  onClick: PropTypes.func,
}

UserName.defaultProps = {
  customStyles: {
    main: '',
    avatar: '',
    userName: '',
  },
  avatarSrc: '',
  userName: '',
  isCreator: false,
  onClick: identity,
}

export default memo(UserName)
