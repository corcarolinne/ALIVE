import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import List from '@material-ui/core/List'

// eslint-disable-next-line
const AnchorRef = React.forwardRef(({ margin, children, ...props }, ref) => (
  <div {...props} ref={ref} style={{ margin, display: 'flex' }}>
    {children}
  </div>
))

const PopperList = ({ anchor, anchorMargin, arrow, children, ...props }) => (
  <Tooltip
    arrow={arrow}
    interactive
    enterTouchDelay={0}
    leaveTouchDelay={9000}
    title={<List component="nav">{children}</List>}
    {...props}
  >
    <AnchorRef margin={anchorMargin}>{anchor}</AnchorRef>
  </Tooltip>
)

PopperList.propTypes = {
  anchor: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
  anchorMargin: PropTypes.string,
  arrow: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

PopperList.defaultProps = {
  anchor: null,
  anchorMargin: '',
  arrow: true,
  children: null,
}

export default memo(PopperList)
