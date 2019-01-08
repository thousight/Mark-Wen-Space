import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import AdminSwitch from './AdminSwitch'
import PublicSwitch from './PublicSwitch'

const RootSwitch = ({ data, location }) => (
  <Switch location={location}>
    <Route path="/admin" component={AdminSwitch} />
    <Route path="/" component={() => <PublicSwitch data={data} />} />
  </Switch>
)

export default withRouter(RootSwitch)
