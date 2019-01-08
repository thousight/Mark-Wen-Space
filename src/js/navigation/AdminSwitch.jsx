import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Wedding } from '../views'
import { AdminSidebar, Footer } from '../components'

const AdminSwitch = () => (
  <div>
    <AdminSidebar />
    <div className="admin">
      <div className="content">
        <Switch>
          <Route path="/admin/wedding" component={Wedding} />
        </Switch>
      </div>
      <Footer />
    </div>
  </div>
)

export default AdminSwitch
