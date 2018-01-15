import React, { Component} from 'react';
import { withRouter } from 'react-router';
import { Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { toggleSidebar, setNavbarCurrentItem } from '../redux/actions';
import { bindActionCreators } from 'redux';

import BlueLogoTransparentBG from '../../img/logo/BlueLogoTransparentBG.png';
import WhiteLogoTransparentBG from '../../img/logo/WhiteLogoTransparentBG.png';


/**
* Top navbar, change transparency based on scroll
*/
class NavigationBar extends Component {

	constructor(props) {
		super(props);

		// Bind functions
		this.handleScroll = this.handleScroll.bind(this);
		this.toggleOnClick = this.toggleOnClick.bind(this);
		this.getLinkClassNames = this.getLinkClassNames.bind(this);
		this.navItemOnClick = this.navItemOnClick.bind(this);
	}

	componentDidMount() {
		// Select the currently selected nav item based on url
		this.navItemOnClick(this.props.location.pathname);

		// Get elements
		this.navbar = document.getElementById('navbar');
		this.logo = document.getElementById('navbar-logo');
		this.toggle = document.getElementById('navbar-toggle');

		// Add scroll listener
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
	}

	/**
	* Animate navbar background transparency change
	*/
	handleScroll() {
		if (window.scrollY <= 0) {
			// If user scrolls to the top
			// swap navbar theme
			this.navbar.classList.add('navbar-transparent');
			this.navbar.classList.remove('navbar-white');
			this.logo.src = WhiteLogoTransparentBG;
			this.navbar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
			this.toggle.classList.add('navbar-toggle-white');
			this.toggle.classList.remove('navbar-toggle-dark');
		} else {
			this.navbar.classList.add('navbar-white');
			this.navbar.classList.remove('navbar-transparent');
			this.navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.96)';
			this.toggle.classList.add('navbar-toggle-dark');
			this.toggle.classList.remove('navbar-toggle-white');
			this.logo.src = BlueLogoTransparentBG;
		}

		if (window.scrollY > 0 && window.scrollY <= 30) {
			// Smoothing background color transition
			this.navbar.style.backgroundColor = 'rgba(255, 255, 255, ' + window.scrollY / 30 * 0.96 + ')';
		}
	}

	/**
	* Set active link
	* @param: address(String)
	*/
	getLinkClassNames(address) {
		return this.props.appSettings.navbarSelectedItem === address ? 'navbar-links-active' : '';
	}

	/**
	* Make NavItem active and direct user to the page
	* @param: address(String)
	*/
	navItemOnClick(address) {
		// Scroll to the top of the page
		window.scrollTo(0, 0);

		if (address === '/') {
			// Sets active item in Redux and triggers navbar render()
			this.props.setNavbarCurrentItem('Home');
		} else {
			// Since address would be '/Resume' format, take out '/'
			this.props.setNavbarCurrentItem(address.substr(1, address.length - 1));
		}

		// Navigate user to address
		this.props.history.push(address);
	}

	/**
	* Open sidebar on click
	* @param: event(JS click event object)
	*/
	toggleOnClick(event) {
		event.preventDefault();
		this.props.toggleSidebar(true);
	}

	render() {
		return (
			<Navbar id="navbar" className="navbar-transparent" collapseOnSelect>
				<Row>
					<Col xs={12} md={10} mdOffset={1}>
						<Navbar.Header>
							{/* Logo */}
							<img
								id="navbar-logo"
								className="navbar-logo"
								src={window.scrollY === 0 ? WhiteLogoTransparentBG : BlueLogoTransparentBG}
								alt="MW Logo"
								onClick={() => {this.navItemOnClick("/")}}/>

							{/* Toggle */}
							<a className="navbar-toggle navbar-toggle-white" id="navbar-toggle" onClick={this.toggleOnClick}>
								<span className="icon-bar" />
								<span className="icon-bar" />
								<span className="icon-bar" />
							</a>
						</Navbar.Header>
						<Nav pullRight>
							<NavItem className={this.getLinkClassNames('Home')} eventKey={1} onClick={() => {this.navItemOnClick('/')}}>Home</NavItem>
							<NavItem className={this.getLinkClassNames('Resume')} eventKey={2} onClick={() => {this.navItemOnClick('/Resume')}}>Resume</NavItem>
							<NavItem className={this.getLinkClassNames('Portfolio')} eventKey={3} onClick={() => {this.navItemOnClick('/Portfolio')}}>Portfolio</NavItem>
							<NavItem className={this.getLinkClassNames('Contact')} eventKey={4} onClick={() => {this.navItemOnClick('/Contact')}}>Contact</NavItem>
						</Nav>
					</Col>
				</Row>
			</Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));
