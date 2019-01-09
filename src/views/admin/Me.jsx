import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { PageHeader } from '../../components'

class Me extends PureComponent {
  render() {
    const {
      currentUser: { firstName, lastName },
    } = this.props

    return (
      <div className="me">
        <PageHeader title={`${firstName} ${lastName}`}>
          <div className="form card">
            <h3>Profile</h3>
          </div>
        </PageHeader>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
})

export default connect(mapStateToProps)(Me)
