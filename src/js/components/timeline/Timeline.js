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
						{this.props.data.sort((a, b) => {return a.order - b.order}).map(obj => {
							return(
								<Row key={obj._id}>
									<Col className="timeline-dot-col" xs={2}>
										<TimelineDot  />
									</Col>
									<Col className="timeline-card-col" xs={12} sm={10}>
										<TimelineCard />
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
