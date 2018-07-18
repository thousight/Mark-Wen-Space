import React, { PureComponent } from 'react';

/**
* Dot on timeline
*/
class TimelineDot extends PureComponent {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		return (
			<div className="timeline-dot">
				<div className="timeline-outer-dot" style={{ backgroundColor: this.props.primaryColor }} />
				<div className="timeline-inner-dot" style={{ backgroundColor: this.props.secondaryColor }} />
				<div className="timeline-center-dot" />
			</div>
		);
	}
}

export default TimelineDot;
