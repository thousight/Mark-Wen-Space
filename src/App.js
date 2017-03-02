import React, { Component } from 'react';
import WhiteLogoTransparentBG from './img/logo/WhiteLogoTransparentBG.png';

class App extends Component {
	render() {
		return (
			<div>
				<div className="background" />
				<div className="content-wrapper">
					<img className="logo" src={WhiteLogoTransparentBG} role="presentation" />
					<p className="title">Mark Wen Space</p>
					<div className="construction-wrapper">
						<p className="construction">Under construction</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
