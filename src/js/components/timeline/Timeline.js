import React, { Component } from 'react';

import TimelineDot from './TimelineDot';

class Timeline extends Component {
	render() {
		return (
			<div className="timeline">
				<TimelineDot primaryColor="#E56721" secondaryColor="#F2993F" />
			</div>
		);
	}
}

export default Timeline;
