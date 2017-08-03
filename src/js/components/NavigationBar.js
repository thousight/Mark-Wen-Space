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
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		console.log('scroll');
	}

	navigateTo(address) {
		this.props.history.push(address);
	}

	render() {
		return (
			<Navbar id="navbar" collapseOnSelect>
				<Row>
					<Col xs={12} sm={10} smOffset={1}>
						<Navbar.Header>
							{/* Logo */}
							<a onClick={() => {this.navigateTo("/")}}><img className="navbar-logo" src={WhiteLogoTransparentBG} alt="MW Logo"/></a>
							<Navbar.Toggle onClick={this.props.toggleOnClick} />
						</Navbar.Header>
						<Nav pullRight>
							<NavItem className="navbar-links" eventKey={1} onClick={() => {this.navigateTo("/")}}>Home</NavItem>
							<NavItem className="navbar-links" eventKey={2} onClick={() => {this.navigateTo("/Resume")}}>Resume</NavItem>
							<NavItem className="navbar-links" eventKey={3} onClick={() => {this.navigateTo("/Portfolio")}}>Portfolio</NavItem>
							<NavItem className="navbar-links" eventKey={4} onClick={() => {this.navigateTo("/Contact")}}>Contact</NavItem>
						</Nav>
					</Col>
				</Row>
			</Navbar>
		);
	}
}

export default withRouter(NavigationBar);
