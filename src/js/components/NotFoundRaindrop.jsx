import React, { PureComponent } from 'react'

import { getRandomInt } from '../utils/number'

const RAINDROP_MAX_LENGTH = 150
const RAINDROP_MIN_LENGTH = 65
const RAINDROP_MAX_WIDTH = 23
const RAINDROP_MIN_WIDTH = 13
const RAINDROP_MAX_OPACITY = 50
const RAINDROP_MIN_OPACITY = 15
const RAINDROP_POSITION_SOFTENER = 90

export default class NotFoundRaindrop extends PureComponent {

  width = `${getRandomInt(RAINDROP_MIN_WIDTH, RAINDROP_MAX_WIDTH)}px`
  height = `${getRandomInt(RAINDROP_MIN_LENGTH, RAINDROP_MAX_LENGTH)}px`
  opacity = getRandomInt(RAINDROP_MIN_OPACITY, RAINDROP_MAX_OPACITY) / 100
  windowWidth = window.innerWidth
  windowHeight = window.innerHeight
  
  getHorizontalPos(space) {
    return Math.random() > 0.5 
    ? this.getUpperHalfPositionStr(this.windowWidth, space)
    : this.getLowerHalfPositionStr(this.windowWidth, space)
  }

  getVerticalPos(space) {
    return Math.random() > 0.5 
                ? this.getUpperHalfPositionStr(this.windowHeight, space)
                : this.getLowerHalfPositionStr(this.windowHeight, space)
  }

  getUpperHalfPositionStr(total, space) {
    return `${getRandomInt(total / 2 + space, total) / total * RAINDROP_POSITION_SOFTENER}%`
  }

  getLowerHalfPositionStr(total, space) {
    return `${getRandomInt(0, total / 2 - space) / total * RAINDROP_POSITION_SOFTENER}%`
  }

  render() {
    const { key, midCircleRect } = this.props

    return (
      <div
          key={key}
          className="not-found-raindrop"
          style={{
            width: this.width,
            height: this.height,
            opacity: this.opacity,
            top: this.getVerticalPos(midCircleRect.height / 2),
            left: this.getHorizontalPos(midCircleRect.width / 2),
          }}
        />
    )
  }
}