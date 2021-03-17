import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'

const DetailsIcon = ({ className }) => {
  const theme = useTheme()
  return (
    <div>
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="25.22" height="19.927" viewBox="0 0 25.22 19.927">
        <g stroke={theme.palette.secondary.main} transform="translate(-49.009 -527)">
          <g transform="translate(-0.991 42.51)">
            <g transform="translate(50 482)">
              <path
                d="M24.813,22.769H.434a.418.418,0,0,1-.421-.416V5.746a.419.419,0,0,1,.421-.415H24.813a.418.418,0,0,1,.42.415V22.353a.418.418,0,0,1-.42.416ZM.854,21.937H24.393V6.162H.854Z"
                transform="translate(-0.013 -0.351)"
              />
              <path
                d="M22.5,5.986H3.1a.419.419,0,0,1-.421-.416V3.081A.418.418,0,0,1,3.1,2.666H22.5a.418.418,0,0,1,.421.415V5.57a.419.419,0,0,1-.421.416ZM3.522,5.154H22.076V3.5H3.522v1.66Z"
                transform="translate(-0.189 -0.176)"
              />
            </g>
          </g>
          <rect width="6" fill="none" height="6" rx="1" transform="translate(52 532.887)" />
          <rect width="19" fill="none" height="2" rx="1" transform="translate(52 541.887)" />
          <rect width="11" fill="none" height="2" rx="1" transform="translate(60 532.887)" />
          <rect width="11" fill="none" height="1.923" rx="0.961" transform="translate(60 536.964)" />
        </g>
      </svg>
    </div>
  )
}

DetailsIcon.propTypes = {
  className: PropTypes.string,
}

DetailsIcon.defaultProps = {
  className: '',
}

export default memo(DetailsIcon)
