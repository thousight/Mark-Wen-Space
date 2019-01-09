import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import { Admin, Wedding, Me } from '../views'
import { AdminSidebar, Fade, Footer } from '../components'

class AdminSwitch extends Component {
  shouldComponentUpdate(nextProps) {
    const { currentUser, location } = this.props
    return (
      nextProps.currentUser !== currentUser ||
      nextProps.location.key !== location.key
    )
  }

  render() {
    const { currentUser, location } = this.props

    if (!currentUser) {
      return <Redirect to="/not-found" />
    }

    return (
      <div>
        <AdminSidebar />
        <div className="admin-switch">
          <div className="content">
            <Fade>
              <Switch key={location.key}>
                <Route path="/admin/wedding" component={Wedding} />
                <Route path="/admin/me" component={Me} />
                <Route path="/admin" component={Admin} />
              </Switch>
            </Fade>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
})

export default withRouter(connect(mapStateToProps)(AdminSwitch))
