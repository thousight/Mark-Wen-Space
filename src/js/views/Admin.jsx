import React, { PureComponent } from 'react'

import { Footer } from '../components'

export default class Admin extends PureComponent {
  render() {
    return (
      <div className="admin">
        <h1>Admin</h1>
        <Footer />
      </div>
    )
  }
}
