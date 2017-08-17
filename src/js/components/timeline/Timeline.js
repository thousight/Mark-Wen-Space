import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import TimelineDot from './TimelineDot';
import TimelineCard from './TimelineCard';

class Timeline extends Component {
	render() {
		return (
			<div className="timeline">
				<Row>

					<Col xs={12} sm={10} smOffset={1}>
						<div className="row">
							<div className="col-xs-2 timeline-line-wrapper">
								<div className="timeline-line" />
							</div>
						</div>
						{this.props.data.sort((a, b) => {return a.order - b.order}).map(obj => {
							return(
								<Row key={obj._id}>
									<Col className="timeline-dot-col" xs={2}>
										<TimelineDot primaryColor={obj.style.primaryColor} secondaryColor={obj.style.secondaryColor} />
									</Col>
									<Col className="timeline-card-col" xs={12} sm={10}>
										<TimelineCard
											organization={obj.organization}
											title={obj.title === null ? obj.degree : obj.title}
											location={obj.city + ', ' + obj.state}
											time={obj.time}
										 	content={obj.desc}
										 	icon={obj.image}
										 	bannerImage={obj.style.bannerImage == null ?
												`linear-gradient(135deg, ${obj.style.primaryColor}, ${obj.style.secondaryColor})`
												:
												obj.style.bannerImage} />
									</Col>
								</Row>
							);
						})}
					</Col>
				</Row>
			</div>
		);
	}
}

export default Timeline;
