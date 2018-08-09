import React, { Component } from 'react'

import { getRandomInt } from '../utils/number'

const RAINDROP_MAX_LENGTH = 150
const RAINDROP_MIN_LENGTH = 65
const RAINDROP_MAX_WIDTH = 23
const RAINDROP_MIN_WIDTH = 13
const RAINDROP_MAX_OPACITY = 50
const RAINDROP_MIN_OPACITY = 15
const RAINDROP_POSITION_SOFTENER = 90

export default class NotFoundRaindrop extends Component {

  state = {
    x: '90%',
    y: 0,
  }

  width = `${getRandomInt(RAINDROP_MIN_WIDTH, RAINDROP_MAX_WIDTH)}px`
  height = `${getRandomInt(RAINDROP_MIN_LENGTH, RAINDROP_MAX_LENGTH)}px`
  opacity = getRandomInt(RAINDROP_MIN_OPACITY, RAINDROP_MAX_OPACITY) / 100
  staticX = '90%'
  staticY = 0
  windowWidth = window.innerWidth
  windowHeight = window.innerHeight
  
  componentDidUpdate(prevProps) {
    let { midCircleRect, shiftTop, shiftLeft } = this.props
    if (midCircleRect && !prevProps.midCircleRect) {
      this.staticX = this.getHorizontalPos(midCircleRect.width / 2)
      this.staticY = this.getVerticalPos(midCircleRect.height / 2)
      this.setState({
        x: this.staticX,
        y: this.staticY,
      })
    }

    if (shiftLeft !== prevProps.shiftLeft || shiftTop !== prevProps.shiftTop) {
      this.setState({
        x: `calc(${this.staticX} - ${shiftLeft}px)`,
        y: `calc(${this.staticY} - ${shiftTop}px)`,
      })
    }
  }
  
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
    const { key } = this.props
    const { x, y } = this.state

    return (
      <div
          key={key}
          className="not-found-raindrop"
          style={{
            width: this.width,
            height: this.height,
            opacity: this.opacity,
            top: y,
            left: x,
          }}
        />
    )
  }
}