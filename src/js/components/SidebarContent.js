import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class SidebarContent extends Component {
	render() {
		return (
			<Menu
				right
				width="60%"
				isOpen={this.props.sidebarOpen}
				// burgerButtonClassName="navbar-toggle"
				customBurgerIcon={false}
				customCrossIcon={false}>
				<Link to="/">Home</Link>
				<Link to="/Resume">Resume</Link>
				<Link to="/Portfolio">Portfolio</Link>
				<Link to="/Contact">Contact</Link>
			</Menu>
		);
	}
}

export default SidebarContent;
