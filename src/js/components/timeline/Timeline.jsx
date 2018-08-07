import React, { PureComponent } from 'react'
import { Row, Col } from 'react-bootstrap'

import TimelineDot from './TimelineDot'
import TimelineCard from './TimelineCard'

/**
* Main timeline component that works with both Exp and Edu data
*/
class Timeline extends PureComponent {

	shouldComponentUpdate(nextProps, nextState) {
		return false
	}

	render() {
		const { data } = this.props
		
		return (
			<div className="timeline">
				<Row>
					<Col xs={12} md={10} mdOffset={1} lg={12} lgOffset={0}>
						<div className="row">
							<div className="col-xs-2 timeline-line-wrapper">
								<div className="timeline-line" />
							</div>
						</div>
						{
							[ ...data ].sort((a, b) => (a.order - b.order)).map(obj => (
								<Row key={obj._id}>
									<Col className="timeline-dot-col" xs={2}>
										<TimelineDot primaryColor={obj.style.primaryColor} secondaryColor={obj.style.secondaryColor} />
									</Col>
									<Col className="timeline-card-col" xs={12} sm={10}>
										<TimelineCard
											organization={obj.organization}
											title={obj.title == null ? obj.degree : obj.title}
											location={obj.city + ', ' + obj.state}
											time={obj.time}
											content={obj.desc}
											icon={obj.image}
											bannerImage={obj.style.bannerImage == null ?
												`linear-gradient(135deg, ${obj.style.primaryColor}, ${obj.style.secondaryColor})`
												:
												`url(${obj.style.bannerImage})`} />
									</Col>
								</Row>
							))
						}
					</Col>
				</Row>
			</div>
		)
	}
}

export default Timeline
