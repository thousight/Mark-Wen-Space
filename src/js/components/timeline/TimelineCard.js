import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import calendar from '../../../img/icons/calendar-time.svg';
import pin from '../../../img/icons/location-pin.svg';
import occupation from '../../../img/icons/occupation.svg';

/**
* Individual card item on the timeline
*/
class TimelineCard extends Component {
	render() {
		return (
			<div className="card timeline-card">

				{/* Icon */}


				{/* Banner */}
				<Row>
					<Col xs={12}>
						<div className="timeline-card-banner" style={{ backgroundImage: this.props.bannerImage }}>

						</div>
					</Col>
				</Row>

				{/* Descriptions */}
				<Row className="timeline-card-desc">
					<Col xs={10} xsOffset={2}>
						{this.props.content.map(item => {
							return (
								<h6 key={item}>
									· {item}
								</h6>
							)
						})}
					</Col>
				</Row>

				{/* <h6>{this.props.organization}</h6>
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
				<h6>{this.props.bannerImage}</h6> */}
			</div>
		);
	}
}

export default TimelineCard;
