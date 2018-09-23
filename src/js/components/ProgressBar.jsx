import React, { PureComponent } from 'react'

/**
 * Progress bar that shows only percentage
 */
class ProgressBar extends PureComponent {
  render() {
    const { percentage, color } = this.props

    return (
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar-progress"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
        <div
          className="progress-bar-total"
          style={{ backgroundColor: color }}
        />
      </div>
    )
  }
}

export default ProgressBar
