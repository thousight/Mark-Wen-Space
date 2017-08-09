import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

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
