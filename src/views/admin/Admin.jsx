import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { PageHeader } from '../../components'

class Admin extends PureComponent {
  render() {
    const {
      currentUser: { firstName },
    } = this.props

    return (
      <PageHeader
        title={`Hi, ${firstName}`}
        backgroundClassName="wedding-background"
      >
        <div className="admin" />
      </PageHeader>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
})

export default connect(mapStateToProps)(Admin)
