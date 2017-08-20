import React, { Component } from 'react';

import BlueLogoTransparentBG from '../../img/logo/BlueLogoTransparentBG.png'

/**
* Loading screen when app starts
*/
class FullScreenLoading extends Component {
	render() {
		return (
			<div className="fullscreen-loading">
				<img className="fullscreen-loading-logo" alt="MW logo" src={BlueLogoTransparentBG} />
				<div className="fullscreen-loading-logo-animation" />
				<h4 className="fullscreen-loading-text">Loading, please wait <span>.</span><span>.</span><span>.</span></h4>
				<h5 className="fullscreen-loading-error-text">{this.props.errorText}</h5>
			</div>
		);
	}
}

export default FullScreenLoading;
