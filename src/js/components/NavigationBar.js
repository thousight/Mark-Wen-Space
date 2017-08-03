import React, { Component} from 'react';
import { withRouter } from 'react-router';
import { Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';

import BlueLogoTransparentBG from '../../img/logo/BlueLogoTransparentBG.png'
import WhiteLogoTransparentBG from '../../img/logo/WhiteLogoTransparentBG.png'

/**
* Top navbar, change transparency based on scroll
*/
class NavigationBar extends Component {

	constructor(props) {
		super(props);

		// Bind functions
		this.handleScroll = this.handleScroll.bind(this);
		// this.getLinkClassNames = this.getLinkClassNames.bind(this);
	}

	componentDidMount() {
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
		if (window.scrollY === 0) {
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
			this.navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.97)';
			this.toggle.classList.add('navbar-toggle-dark');
			this.toggle.classList.remove('navbar-toggle-white');
		}

		if (window.scrollY > 0 && window.scrollY <= 10) {
			// Smoothing background color transition
			this.logo.src = BlueLogoTransparentBG;
			this.navbar.style.backgroundColor = 'rgba(255, 255, 255, ' + window.scrollY / 10 * 0.97 + ')';
		}
	}

	/**
	* Bring user to specific address
	*/
	navigateTo(address) {
		this.props.history.push(address);
	}

	/**
	* Set active link
	*/
	getLinkClassNames(address) {
		return 'navbar-links' + this.props.location.pathname === address ? ' navbar-links-active' : '';
	}

	render() {
		return (
			<Navbar id="navbar" className="navbar-transparent" collapseOnSelect>
				<Row>
					<Col xs={12} sm={10} smOffset={1}>
						<Navbar.Header>
							{/* Logo */}
							<a onClick={() => {this.navigateTo("/")}}><img id="navbar-logo" className="navbar-logo" src={WhiteLogoTransparentBG} alt="MW Logo"/></a>
							<Navbar.Toggle id="navbar-toggle" onClick={this.props.openSidebar} />
						</Navbar.Header>
						<Nav pullRight>
							<NavItem className={this.getLinkClassNames('/')} eventKey={1} onClick={() => {this.navigateTo("/")}}>Home</NavItem>
							<NavItem className={'navbar-links' + this.props.location.pathname === '/resume' ? ' navbar-links-active' : ''} eventKey={2} onClick={() => {this.navigateTo("/Resume")}}>Resume</NavItem>
							<NavItem className={'navbar-links' + this.props.location.pathname === '/portfolio' ? ' navbar-links-active' : ''} eventKey={3} onClick={() => {this.navigateTo("/Portfolio")}}>Portfolio</NavItem>
							<NavItem className={'navbar-links' + this.props.location.pathname === '/contact' ? ' navbar-links-active' : ''} eventKey={4} onClick={() => {this.navigateTo("/Contact")}}>Contact</NavItem>
						</Nav>
					</Col>
				</Row>
			</Navbar>
		);
	}
}

export default withRouter(NavigationBar);
