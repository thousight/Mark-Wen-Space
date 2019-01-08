import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Admin } from '../views'
import { AdminSidebar } from '../components'

const AdminSwitch = () => (
  <div>
    <AdminSidebar />
    <Switch>
      <Route path="/" component={Admin} />
    </Switch>
  </div>
)

export default AdminSwitch
