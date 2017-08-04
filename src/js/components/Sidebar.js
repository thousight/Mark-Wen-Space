import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux'

class Sidebar extends Component {
	render() {
		return (
			<Menu
				right
				width="60%"
				isOpen={this.props.appSettings.isSidebarOpen}
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

const mapStateToProps = state => {
	return {
		appSettings: state.appSettings
	}
}

export default connect(mapStateToProps)(Sidebar);
