import React, { Component } from 'react'
import { connect } from 'react-redux'

import { tokenLogin } from '../redux/actions'

import BlueLogoTransparentBG from '../img/logo/BlueLogoTransparentBG.png'

/**
 * Loading screen when app starts
 */
class FullScreenLoading extends Component {
  state = {
    centerImageLoaded: false,
  }

  componentDidMount() {
    const { tokenLogin } = this.props
    tokenLogin()
  }

  render() {
    const { centerImageLoaded } = this.state
    const { error } = this.props

    return (
      <div className="fullscreen-loading">
        <img
          className="fullscreen-loading-logo"
          alt="MW logo"
          src={BlueLogoTransparentBG}
          style={{ opacity: centerImageLoaded ? 1 : 0 }}
          onLoad={() => this.setState({ centerImageLoaded: true })}
        />
        <div className="fullscreen-loading-logo-animation" />
        <h4 className="fullscreen-loading-text">
          Loading, please wait
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </h4>
        <p className="fullscreen-loading-error-text">
          {error
            ? '\nSomething went wrong when loading... \n\nPlease check your network connectivity \n' +
              'and if you are using https instead of http.'
            : ''}
        </p>
      </div>
    )
  }
}

export default connect(
  null,
  {
    tokenLogin,
  },
)(FullScreenLoading)
