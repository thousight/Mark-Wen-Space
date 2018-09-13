import React, { PureComponent } from 'react'

/**
 * Dot on timeline
 */
export default class TimelineDot extends PureComponent {
  render() {
    const { primaryColor, secondaryColor } = this.props

    return (
      <div className="timeline-dot">
        <div
          className="timeline-outer-dot"
          style={{ backgroundColor: primaryColor }}
        />
        <div
          className="timeline-inner-dot"
          style={{ backgroundColor: secondaryColor }}
        />
        <div className="timeline-center-dot" />
      </div>
    )
  }
}
