import React, { Component } from 'react'

import { NotFoundRaindrop } from '../../components'
import { getRandomInt } from '../../utils/number'

import notFoundCenter from '../../img/NotFoundCenter.svg'

const RAINDROP_MAX_AMOUNT = window.innerWidth >= 768 ? 20 : 13
const RAINDROP_MIN_AMOUNT = window.innerWidth >= 768 ? 12 : 9
const RAINDROP_MOVEMENT_STRENGTH = 25

/**
 * Static Not Found center text and image
 */
export default class NotFound extends Component {
  state = {
    centerImageLoaded: false,
    shiftTop: 0,
    shiftLeft: 0,
    midCircleRect: null,
  }

  numberOfRaindrops = [
    ...Array(getRandomInt(RAINDROP_MIN_AMOUNT, RAINDROP_MAX_AMOUNT)),
  ]

  midCircle = null

  windowWidth = window.innerWidth

  windowHeight = window.innerHeight

  componentDidMount() {
    this.getMidCircleHeight()
  }

  onMouseMove = ({ pageX, pageY }) => {
    this.setState({
      shiftLeft:
        (RAINDROP_MOVEMENT_STRENGTH / this.windowWidth) *
          (pageX - this.windowWidth / 2) *
          -1 -
        25,
      shiftTop:
        (RAINDROP_MOVEMENT_STRENGTH / this.windowHeight) *
          (pageY - this.windowHeight / 2) *
          -1 -
        25,
    })
  }

  getMidCircleHeight = () => {
    if (this.midCircle) {
      this.setState({ midCircleRect: this.midCircle.getBoundingClientRect() })
    }
  }

  render() {
    const { centerImageLoaded, shiftTop, shiftLeft, midCircleRect } = this.state

    return (
      <div className="not-found-page" onMouseMove={this.onMouseMove}>
        <div className="not-found-center-wrapper">
          <div className="not-found-center-circle">
            <div
              className="not-found-center-circle"
              ref={midCircle => {
                this.midCircle = midCircle
              }}
            >
              <div className="not-found-center-circle" />
            </div>
          </div>
        </div>

        <img
          className="not-found-center-svg"
          alt="Not found"
          src={notFoundCenter}
          style={{ opacity: centerImageLoaded ? 1 : 0 }}
          onLoad={() => this.setState({ centerImageLoaded: true })}
        />

        <div className="not-found-raindrops-container">
          {this.numberOfRaindrops.map((_, index) => (
            <NotFoundRaindrop
              key={`raindrop_${index}`} // eslint-disable-line
              midCircleRect={midCircleRect}
              shiftTop={shiftTop}
              shiftLeft={shiftLeft}
            />
          ))}
        </div>
      </div>
    )
  }
}
