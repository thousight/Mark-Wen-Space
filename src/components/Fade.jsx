import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Fade = ({ children, enterTimeout = 500, leaveTimeout = 500 }) => (
  <ReactCSSTransitionGroup
    transitionName="fade"
    transitionEnterTimeout={enterTimeout}
    transitionLeaveTimeout={leaveTimeout}
  >
    {children}
  </ReactCSSTransitionGroup>
)

export default Fade
