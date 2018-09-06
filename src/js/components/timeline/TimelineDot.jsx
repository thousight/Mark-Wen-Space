import React, { PureComponent } from 'react'

/**
* Dot on timeline
*/
export default class TimelineDot extends PureComponent {
	render() {
		return (
			<div className="timeline-dot">
				<div className="timeline-outer-dot" style={{ backgroundColor: this.props.primaryColor }} />
				<div className="timeline-inner-dot" style={{ backgroundColor: this.props.secondaryColor }} />
				<div className="timeline-center-dot" />
			</div>
		)
	}
}
