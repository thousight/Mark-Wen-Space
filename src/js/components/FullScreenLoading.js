import React, { Component } from 'react';
import { connect } from 'react-redux'

/**
* Loading screen when app starts
*/
class FullScreenLoading extends Component {
	render() {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		appSettings: state.appSettings
	}
}

export default connect(mapStateToProps)(FullScreenLoading);
