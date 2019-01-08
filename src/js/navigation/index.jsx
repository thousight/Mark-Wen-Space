import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import AdminSwitch from './AdminSwitch'
import PublicSwitch from './PublicSwitch'

const RootSwitch = ({ data, location }) => (
  <Switch location={location}>
    <Route path="/admin" component={AdminSwitch} />
    <Route path="/">
      <PublicSwitch data={data} />
    </Route>
  </Switch>
)

export default withRouter(RootSwitch)
