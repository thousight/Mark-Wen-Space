import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux'
import { toggleSidebar } from '../redux/actions';
import { bindActionCreators } from 'redux';

/**
* Side navbar, only shows when user taps on the toggle in navbar
*/
class Sidebar extends Component {

	constructor(props) {
		super(props);

		// Bind functions
		this.linkOnClick = this.linkOnClick.bind(this);
	}

	linkOnClick() {
		this.props.toggleSidebar();
	}

	render() {
		return (
			<Menu
				right
				width="70%"
				isOpen={this.props.appSettings.isSidebarOpen}
				customBurgerIcon={false}
				customCrossIcon={false}>
				<Link to="/" onClick={this.linkOnClick}>Home</Link>
				<Link to="/Resume" onClick={this.linkOnClick}>Resume</Link>
				<Link to="/Portfolio" onClick={this.linkOnClick}>Portfolio</Link>
				<Link to="/Contact" onClick={this.linkOnClick}>Contact</Link>
			</Menu>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		toggleSidebar
	}, dispatch);
}

const mapStateToProps = state => {
	return {
		appSettings: state.appSettings
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
