import React, { PureComponent } from 'react';
import { Row, Col } from 'react-bootstrap';

import calendar from '../../../img/icons/calendar-time.svg';
import pin from '../../../img/icons/location-pin.svg';
import occupation from '../../../img/icons/occupation.svg';

/**
* Individual card item on the timeline
*/
class TimelineCard extends PureComponent {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		const { organization, title, location, time, icon, content, bannerImage } = this.props

		return (
			<div className="card timeline-card">

				{/* Banner */}
				<Row>
					<Col xs={12}>
						<div className="timeline-card-banner" style={{ backgroundImage: bannerImage }}>
							<Row>
								<Col xs={12} sm={9} smOffset={3} lg={10} lgOffset={2}>
									<h3 className="timeline-card-banner-title">{organization}</h3>
									<ul className="timeline-card-banner-list">
										<li className="timeline-card-banner-list-item">
											<img className="timeline-card-banner-icons" alt="occupation" src={occupation} />
											<p>{title}</p>
										</li>
										<li className="timeline-card-banner-list-item">
											<img className="timeline-card-banner-icons" alt="location" src={pin} />
											<p>{location}</p>
										</li>
										<li className="timeline-card-banner-list-item">
											<img className="timeline-card-banner-icons" alt="time period" src={calendar} />
											<p>{time}</p>
										</li>
									</ul>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>

				{/* Descriptions */}
				<Row className="timeline-card-desc">
					<Col className="timeline-card-icon-wrapper" sm={3} lg={2}>
						{/* Icon */}
						<img className="timeline-card-icon" alt={title} src={icon} />
					</Col>
					<Col xs={12} sm={9} lg={10}>
						{
							content.map(item => (
								<p key={item}>
									· {item}
								</p>
							))
						}
					</Col>
				</Row>
			</div>
		);
	}
}

export default TimelineCard;
