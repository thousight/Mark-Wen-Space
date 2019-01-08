import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Admin extends PureComponent {
  render() {
    const {
      currentUser: { firstName },
    } = this.props

    return (
      <div className="admin">
        <h1>Hi, {firstName}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
})

export default connect(mapStateToProps)(Admin)
