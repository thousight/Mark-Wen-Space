import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { Timeline } from './components';

import suitcase from '../img/icons/suitcase.svg';
import graduationCap from '../img/icons/graduationCap.svg';
import code from '../img/icons/code.svg';


/**
* Resume page rendering data dynamically
*/
class Resume extends Component {
	render() {
		return (
			<div className="resume">
				<div className="resume-title">
					<h1>Resume</h1>
				</div>

				{/* Experience */}
				<div className="resume-content container">
					<div className="resume-subtitle">
						<img className="resume-subtitle-img" alt="Experience" src={suitcase} />
						<h4>Experience</h4>
					</div>

					<Timeline data={this.props.expContent} />

					{/* Education */}
					<div className="resume-subtitle">
						<img className="resume-subtitle-img" alt="Experience" src={graduationCap} />
						<h4>Education</h4>
					</div>

					<Timeline data={this.props.eduContent} />

					{/* Skills */}
					<div className="resume-subtitle">
						<img className="resume-subtitle-img" alt="Experience" src={code} />
						<h4>Skills</h4>
					</div>

					<Row>
						<Col xs={12} sm={10} smOffset={1}>
							<div className="card">

							</div>
						</Col>
					</Row>

				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		eduContent: state.staticContent.eduContent,
		expContent: state.staticContent.expContent,
		skillsContent: state.staticContent.skillsContent
	}
}

export default connect(mapStateToProps)(Resume);
