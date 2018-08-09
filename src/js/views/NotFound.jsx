import React, { Component } from 'react'

import notFoundCenter from '../../img/NotFoundCenter.svg'

/**
* Static Not Found center text and image
*/
export default class NotFound extends Component {

  state = {
    centerImageLoaded: false
  }

  render() {
    const { centerImageLoaded } = this.state

    return (
      <div className="not-found-page">
        <div className="not-found-center-wrapper">
          <div className="not-found-center-circle">
            <div className="not-found-center-circle">
              <div className="not-found-center-circle">
              </div>
            </div>
          </div>
        </div>
        
        <img 
          className="not-found-center-svg"
          alt='Not found'
          src={notFoundCenter}
          style={{ opacity: centerImageLoaded ? 1 : 0 }}
          onLoad={() => this.setState({ centerImageLoaded: true })}
        />
      </div>
    )
  }
}
