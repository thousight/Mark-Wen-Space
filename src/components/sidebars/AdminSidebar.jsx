import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

import { toggleAdminSidebar, logout } from '../../redux/actions'

import WhiteLogoTransparentBG from '../../img/logo/WhiteLogoTransparentBG.png'

const mql = window.matchMedia(`(min-width: 768px)`)

/**
 * Side navbar, only shows when user taps on the toggle in navbar
 */
class AdminSidebar extends Component {
  state = {
    currentlySelected: '',
    isSmallScreen: false,
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
    this.setState({ isSmallScreen: !mql.matches })
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged)
  }

  /**
   * Set active link
   */
  getLinkClassNames = address => {
    const { currentlySelected } = this.state

    return currentlySelected === address ? 'bm-item sidebar-active' : 'bm-item'
  }

  /**
   * When screen size changes from sm to md(mql.matches = true) and from md to sm(mql.matches = false)
   */
  mediaQueryChanged = () => {
    const isSmallScreen = !mql.matches
    this.toggleSidebar(!isSmallScreen)
    this.setState({ isSmallScreen })
  }

  /**
   * Handle sidebar NavItem click action
   */
  linkOnClick = address => {
    const { isSmallScreen } = this.state

    if (isSmallScreen) {
      this.toggleSidebar(false)
    }
    // Scroll to the top of the page
    window.scrollTo(0, 0)
    this.setState({ currentlySelected: address.substring(7) })
  }

  /**
   * Handle on overlay clicked
   */
  overlayOnClick = e => {
    e.preventDefault()
    this.toggleSidebar(false)
  }

  toggleSidebar = isOpen => {
    const { toggleAdminSidebar } = this.props
    toggleAdminSidebar(isOpen)
  }

  handleLogout = () => {
    const { logout } = this.props
    logout()
  }

  render() {
    const {
      isAdminSidebarOpen,
      currentUser: { firstName, image },
    } = this.props
    const { isSmallScreen } = this.state

    return (
      <div className="admin-sidebar">
        <div
          id="sidebarOverlay"
          role="button"
          tabIndex={0}
          onClick={this.overlayOnClick}
          onKeyPress={this.overlayOnClick}
          style={{
            display: isSmallScreen && isAdminSidebarOpen ? 'block' : 'none',
          }}
        />
        <Menu
          noOverlay
          width="300px"
          isOpen={isAdminSidebarOpen}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <Link
            className="sidebar-logo"
            to="/admin"
            onClick={() => this.linkOnClick('/admin')}
          >
            <img alt="MW Logo" src={image || WhiteLogoTransparentBG} />
          </Link>
          <Link
            className={this.getLinkClassNames('me')}
            to="/admin/me"
            onClick={() => this.linkOnClick('/admin/me')}
          >
            Hi, {firstName}
          </Link>
          <Link
            className={this.getLinkClassNames('wedding')}
            to="/admin/wedding"
            onClick={() => this.linkOnClick('/admin/wedding')}
          >
            Wedding
          </Link>
          <Link
            className={this.getLinkClassNames()}
            to="/"
            onClick={() => this.linkOnClick('/')}
          >
            Back to public
          </Link>
          <Link
            className={this.getLinkClassNames()}
            to="/"
            onClick={this.handleLogout}
          >
            Log out
          </Link>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAdminSidebarOpen: state.appSettings.isAdminSidebarOpen,
  currentUser: state.auth.currentUser,
})

const mapDispatchToProps = {
  toggleAdminSidebar,
  logout,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminSidebar)
