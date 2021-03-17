import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  scrollHint: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey.default,

    opacity: '0.34',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.25,
    letterSpacing: '-0.1px',
    textAlign: 'end',
  },

  hintText: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    marginRight: '20px',
  },
  firstLine: {
    fontWeight: 700,
  },
}))

const ScrollHintIcon = () => {
  const classes = useStyles()
  return (
    <div className={classes.scrollHint}>
      <div className={classes.hintText}>
        <div className={classes.firstLine}>Scroll down</div>
        <div className={classes.secondLine}>to discover more</div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="44" viewBox="0 0 26 44">
        <g fill="#FFF" fillRule="nonzero" opacity=".341">
          <path d="M13 0C5.832 0 0 5.806 0 12.942v18.116C0 38.194 5.832 44 13 44s13-5.806 13-12.942V12.942C26 5.806 20.168 0 13 0zm10.348 31.058c0 5.68-4.642 10.302-10.348 10.302S2.652 36.738 2.652 31.058V12.942C2.652 7.262 7.294 2.64 13 2.64s10.348 4.622 10.348 10.302v18.116z" />
          <path d="M13 9c-1.105 0-2 1.022-2 1.775v5.862c0 .753.895 1.363 2 1.363 1.104 0 2-.61 2-1.363v-5.862C15 10.022 14.105 9 13 9z" />
        </g>
      </svg>
    </div>
  )
}

export default memo(ScrollHintIcon)
