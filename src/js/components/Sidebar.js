import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import { toggleSidebar, setNavbarCurrentItem } from '../redux/actions';
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

	/**
	* Handle sidebar NavItem click action
	*/
	linkOnClick(address) {
		this.props.toggleSidebar(false);
		if (address === '/') {
			// Sets active item in Redux and triggers navbar render()
			this.props.setNavbarCurrentItem('Home');
		} else {
			// Since address would be '/Resume' format, take out '/'
			this.props.setNavbarCurrentItem(address.substr(1, address.length - 1));
		}
	}

	/**
	* Set active link
	*/
	getLinkClassNames(address) {
		return this.props.appSettings.navbarSelectedItem === address ? 'sidebar-active' : '';
	}

	/**
	* Handle on overlay clicked
	*/
	overlayOnClick(e) {
		e.preventDefault();
		this.props.toggleSidebar(false);
	}

	render() {
		return (
			<div>
				<div id="sidebarOverlay" onClick={e => {this.overlayOnClick(e);}} style={{display: this.props.appSettings.isSidebarOpen ? 'block' : 'none'}} />
				<Menu
					right
					noOverlay
					width="60%"
					isOpen={this.props.appSettings.isSidebarOpen}
					customBurgerIcon={false}
					customCrossIcon={false}>
					<Link className={this.getLinkClassNames('Home')} to="/" onClick={() => {this.linkOnClick('/')}}>Home</Link>
					<Link className={this.getLinkClassNames('Resume')} to="/Resume" onClick={() => {this.linkOnClick('/Resume')}}>Resume</Link>
					<Link className={this.getLinkClassNames('Portfolio')} to="/Portfolio" onClick={() => {this.linkOnClick('/Portfolio')}}>Portfolio</Link>
					<Link className={this.getLinkClassNames('Contact')} to="/Contact" onClick={() => {this.linkOnClick('/Contact')}}>Contact</Link>
				</Menu>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		toggleSidebar,
		setNavbarCurrentItem
	}, dispatch);
}

const mapStateToProps = state => {
	return {
		appSettings: state.appSettings
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
