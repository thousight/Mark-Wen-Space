import React, { Component } from 'react'

import { NotFoundRaindrop } from '../components'
import { getRandomInt } from '../utils/number'

import notFoundCenter from '../../img/NotFoundCenter.svg'

const RAINDROP_MAX_AMOUNT = 15
const RAINDROP_MIN_AMOUNT = 10

/**
* Static Not Found center text and image
*/
export default class NotFound extends Component {

  state = {
    centerImageLoaded: false,
  }

  onMouseMove = this.onMouseMove.bind(this)

  getMidCircleHeight = this.getMidCircleHeight.bind(this)

  numberOfRaindrops = Array.apply(null, Array(getRandomInt(RAINDROP_MIN_AMOUNT, RAINDROP_MAX_AMOUNT)))

  midCircle = null

  onMouseMove({ pageX, pageY }) {
    
  }

  getMidCircleHeight() {
    if (this.midCircle) {
      console.log( this.midCircle.getBoundingClientRect());
      
      return this.midCircle.getBoundingClientRect()
    }
    return 680
  }
  
  render() {
    const { centerImageLoaded } = this.state

    return (
      <div className="not-found-page"  onMouseMove={this.onMouseMove}>
        <div className="not-found-center-wrapper">
          <div className="not-found-center-circle">
            <div
              className="not-found-center-circle"
              ref={midCircle => this.midCircle = midCircle}
            >
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

        <div className="not-found-raindrops-container">
          {
            this.numberOfRaindrops.map((_, index) => (
              <NotFoundRaindrop
                key={`raindrop_${index}`}
                midCircleRect={this.getMidCircleHeight()}
              />
            ))
          }
        </div>
      </div>
    )
  }
}
