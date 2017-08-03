import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SidebarContent extends Component {
	render() {
		return (
			<div className="sidebar-content">
				<Link to="/" onClick={() => {this.onNavItemClick("home-background")}}>Home</Link>
				<Link to="/Resume" onClick={() => {this.onNavItemClick("resume-background")}}>Resume</Link>
				<Link to="/Portfolio" onClick={() => {this.onNavItemClick("portfolio-background")}}>Portfolio</Link>
				<Link to="/Contact" onClick={() => {this.onNavItemClick("contact-background")}}>Contact</Link>
			</div>
		);
	}
}

export default SidebarContent;
