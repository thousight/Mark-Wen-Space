import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Admin, Wedding, Me } from '../views'
import { AdminSidebar, Fade, Footer } from '../components'

const AdminSwitch = ({ currentUser }) =>
  currentUser ? (
    <div>
      <AdminSidebar />
      <div className="admin-switch">
        <div className="content">
          <Fade>
            <Switch key={window.location.key}>
              <Route path="/admin/wedding" component={Wedding} />
              <Route path="/admin/me" component={Me} />
              <Route path="/admin" component={Admin} />
            </Switch>
          </Fade>
        </div>
        <Footer />
      </div>
    </div>
  ) : (
    <Redirect to="/not-found" />
  )

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
})

export default connect(mapStateToProps)(AdminSwitch)
