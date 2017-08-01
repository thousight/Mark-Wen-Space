import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import BlueLogoTransparentBG from '../../img/logo/BlueLogoTransparentBG.png'
import WhiteLogoTransparentBG from '../../img/logo/WhiteLogoTransparentBG.png'

/**
* Top navbar, change transparency based on scroll
*/
class NavigationBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	/**
	* On dropdown toggle click
	*/
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	/**
	* On navbar item click
	* swap background image
	*/
	onNavItemClick(background) {
		document.body.className = background;
	}

	render() {
		return (
			<Navbar color="faded" light toggleable>
				{/* Collapse button */}
				<NavbarToggler right onClick={this.toggle} />
				{/* Logo */}
				<Link to="/"><img className="navbar-logo" src={WhiteLogoTransparentBG} alt="MW Logo"/></Link>
				{/* Links */}
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem><Link to="/" onClick={this.onNavItemClick("home-background")}>Home</Link></NavItem>
						<NavItem><Link to="/Resume" onClick={this.onNavItemClick("resume-background")}>Resume</Link></NavItem>
						<NavItem><Link to="/Portfolio" onClick={this.onNavItemClick("portfolio-background")}>Portfolio</Link></NavItem>
						<NavItem><Link to="/Contact" onClick={this.onNavItemClick("contact-background")}>Contact</Link></NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default NavigationBar;
