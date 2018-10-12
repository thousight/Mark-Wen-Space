import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { connect } from 'react-redux'
import { toggleSidebar, setNavbarCurrentItem } from '../redux/actions'

import WhiteLogoTransparentBG from '../../img/logo/WhiteLogoTransparentBG.png'

/**
 * Side navbar, only shows when user taps on the toggle in navbar
 */
class Sidebar extends Component {
  /**
   * Set active link
   */
  getLinkClassNames = address => {
    const { appSettings } = this.props

    return appSettings.navbarSelectedItem === address ? 'sidebar-active' : ''
  }

  /**
   * Handle sidebar NavItem click action
   */
  linkOnClick = address => {
    const { toggleSidebar, setNavbarCurrentItem } = this.props

    toggleSidebar(false)
    if (address === '/') {
      // Sets active item in Redux and triggers navbar render()
      setNavbarCurrentItem('Home')
    } else {
      // Since address would be '/Resume' format, take out '/'
      setNavbarCurrentItem(address.substr(1, address.length - 1))
    }
    // Scroll to the top of the page
    window.scrollTo(0, 0)
  }

  /**
   * Handle on overlay clicked
   */
  overlayOnClick = e => {
    const { toggleSidebar } = this.props
    e.preventDefault()
    toggleSidebar(false)
  }

  render() {
    const { appSettings } = this.props

    return (
      <div>
        <div
          id="sidebarOverlay"
          role="button"
          tabIndex={0}
          onClick={this.overlayOnClick}
          onKeyPress={this.overlayOnClick}
          style={{
            display: appSettings.isSidebarOpen ? 'block' : 'none',
          }}
        />
        <Menu
          right
          noOverlay
          width="60%"
          isOpen={appSettings.isSidebarOpen}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <Link
            className="sidebar-logo"
            to="/"
            onClick={() => this.linkOnClick('/')}
          >
            <img alt="MW Logo" src={WhiteLogoTransparentBG} />
          </Link>
          <Link
            className={this.getLinkClassNames('Home')}
            to="/"
            onClick={() => this.linkOnClick('/')}
          >
            Home
          </Link>
          <Link
            className={this.getLinkClassNames('Resume')}
            to="/Resume"
            onClick={() => this.linkOnClick('/Resume')}
          >
            Resume
          </Link>
          <Link
            className={this.getLinkClassNames('Portfolio')}
            to="/Portfolio"
            onClick={() => this.linkOnClick('/Portfolio')}
          >
            Portfolio
          </Link>
          <Link
            className={this.getLinkClassNames('Contact')}
            to="/Contact"
            onClick={() => this.linkOnClick('/Contact')}
          >
            Contact
          </Link>
        </Menu>
      </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar)
