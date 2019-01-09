import React, { PureComponent } from 'react'

import { PageHeader } from '../../components'

export default class Wedding extends PureComponent {
  render() {
    return (
      <div className="wedding">
        <PageHeader title="Wedding" backgroundClassName="wedding-background">
          <div className="form card">
            <h3>Guests</h3>
          </div>
        </PageHeader>
      </div>
    )
  }
}
