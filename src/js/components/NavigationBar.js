import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
* Top navbar, change transparency based on scroll
*/
class NavigationBar extends Component {
	render() {
		return (
			<navbar className="navbar">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/Resume">Resume</Link></li>
					<li><Link to="/Portfolio">Portfolio</Link></li>
					<li><Link to="/Contact">Contact</Link></li>
				</ul>
			</navbar>
		);
	}
}

export default NavigationBar;
