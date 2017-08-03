import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';

class SidebarContent extends Component {
	render() {
		return (
			<Menu right width="20%" isOpen={this.props.sidebarOpen}>
				<Link to="/">Home</Link>
				<Link to="/Resume">Resume</Link>
				<Link to="/Portfolio">Portfolio</Link>
				<Link to="/Contact">Contact</Link>
			</Menu>
		);
	}
}

export default SidebarContent;
