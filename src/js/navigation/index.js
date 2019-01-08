import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import AdminSwitch from './AdminSwitch'
import PublicSwitch from './PublicSwitch'

const RootSwitch = ({ data, location }) => (
  <ReactCSSTransitionGroup
    transitionName="fade"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
  >
    <Switch key={location.pathname} location={location}>
      <Route path="/admin" component={AdminSwitch} />
      <Route path="/" component={() => <PublicSwitch data={data} />} />
    </Switch>
  </ReactCSSTransitionGroup>
)

export default withRouter(RootSwitch)
