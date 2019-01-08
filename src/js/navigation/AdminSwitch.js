import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Admin } from '../views'

const AdminSwitch = () => (
  <Switch>
    <Route path="/" component={Admin} />
  </Switch>
)

export default AdminSwitch
