import React, { Component } from 'react';

class TimelineCard extends Component {
	render() {
		return (
			<div className="card timeline-card">
				<h6>{this.props.organization}</h6>
				<h6>{this.props.title}</h6>
				<h6>{this.props.location}</h6>
				<h6>{this.props.time}</h6>
				{this.props.content.map(item => {
					return (
						<h6 key={item}>
							{item}
						</h6>
					)
				})}
				<h6>{this.props.icon}</h6>
				<h6>{this.props.bannerImage}</h6>
			</div>
		);
	}
}

export default TimelineCard;
