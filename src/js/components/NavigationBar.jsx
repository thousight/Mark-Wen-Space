import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap'

import { toggleSidebar, setNavbarCurrentItem } from '../redux/actions'

import BlueLogoTransparentBG from '../../img/logo/BlueLogoTransparentBG.png'
import WhiteLogoTransparentBG from '../../img/logo/WhiteLogoTransparentBG.png'

/**
 * Top navbar, change transparency based on scroll
 */
class NavigationBar extends Component {
  state = {
    logo: WhiteLogoTransparentBG,
    navbarClassName: 'navbar-transparent',
    navbarBackgroundColor: 'rgba(255, 255, 255, 0)',
    toggleClassName: 'navbar-toggle-white',
  }

  componentDidMount() {
    // Add scroll listener
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  /**
   * Set active link
   * @param: address(String)
   */
  getLinkClassNames = address => {
    const { appSettings } = this.props
    return appSettings.navbarSelectedItem === address
      ? 'navbar-links-active'
      : ''
  }

  /**
   * Animate navbar background transparency change
   */
  handleScroll = () => {
    if (window.scrollY <= 0) {
      // If user scrolls to the top
      this.setState({
        logo: WhiteLogoTransparentBG,
        navbarClassName: 'navbar-transparent',
        navbarBackgroundColor: 'rgba(255, 255, 255, 0)',
        toggleClassName: 'navbar-toggle-white',
      })
    } else {
      this.setState({
        logo: BlueLogoTransparentBG,
        navbarClassName: 'navbar-white',
        navbarBackgroundColor: 'rgba(255, 255, 255, 0.96)',
        toggleClassName: 'navbar-toggle-dark',
      })
    }

    if (window.scrollY > 0 && window.scrollY <= 30) {
      // Smoothing background color transition
      this.setState({
        navbarBackgroundColor: `rgba(255, 255, 255, ${(window.scrollY / 30) *
          0.96})`,
      })
    }
  }

  /**
   * Make NavItem active and direct user to the page
   * @param: address(String)
   */
  navItemOnClick = address => {
    const { setNavbarCurrentItem, history } = this.props
    // Scroll to the top of the page
    window.scrollTo(0, 0)

    if (address === '/') {
      // Sets active item in Redux and triggers navbar render()
      setNavbarCurrentItem('Home')
    } else {
      // Since address would be '/Resume' format, take out '/'
      setNavbarCurrentItem(address.substr(1, address.length - 1))
    }

    // Navigate user to address
    history.push(address)
  }

  /**
   * Open sidebar on click
   * @param: event(JS click event object)
   */
  toggleOnClick = event => {
    const { toggleSidebar } = this.props
    event.preventDefault()
    toggleSidebar(true)
  }

  render() {
    const {
      logo,
      navbarClassName,
      navbarBackgroundColor,
      toggleClassName,
    } = this.state

    return (
      <Navbar
        collapseOnSelect
        className={navbarClassName}
        style={{ backgroundColor: navbarBackgroundColor }}
      >
        <Row>
          <Col xs={12} md={10} mdOffset={1} lg={12} lgOffset={0}>
            <Navbar.Header>
              {/* Logo */}
              <div
                className="navbar-logo-wrapper"
                onClick={() => this.navItemOnClick('/')}
                onKeyPress={() => this.navItemOnClick('/')}
                role="link"
                tabIndex={0}
              >
                <img className="navbar-logo" src={logo} alt="MW Logo" />
              </div>

              {/* Toggle */}
              <div
                className={`navbar-toggle ${toggleClassName}`}
                onClick={this.toggleOnClick}
                onKeyPress={this.toggleOnClick}
                role="link"
                tabIndex={0}
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </div>
            </Navbar.Header>

            <Nav pullRight>
              <NavItem
                className={this.getLinkClassNames('Home')}
                eventKey={1}
                onClick={() => this.navItemOnClick('/')}
              >
                Home
              </NavItem>
              <NavItem
                className={this.getLinkClassNames('Resume')}
                eventKey={2}
                onClick={() => {
                  this.navItemOnClick('/Resume')
                }}
              >
                Resume
              </NavItem>
              <NavItem
                className={this.getLinkClassNames('Portfolio')}
                eventKey={3}
                onClick={() => {
                  this.navItemOnClick('/Portfolio')
                }}
              >
                Portfolio
              </NavItem>
              <NavItem
                className={this.getLinkClassNames('Contact')}
                eventKey={4}
                onClick={() => {
                  this.navItemOnClick('/Contact')
                }}
              >
                Contact
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebar,
      setNavbarCurrentItem,
    },
    dispatch,
  )

const mapStateToProps = state => ({
  appSettings: state.appSettings,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(NavigationBar),
)
