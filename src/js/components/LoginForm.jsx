import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'

import { login } from '../redux/actions/AuthActions'

import Logo from '../../img/logo/WhiteLogoTransparentBG.png'

class LoginForm extends PureComponent {
  handleLogInSubmit = values => {
    const { login } = this.props
    login(values)
  }

  render() {
    const { loading, error: apiError } = this.props

    return (
      <div className="login-form card">
        <div className="login-form-gradient">
          <img src={Logo} alt="logo" />
        </div>
        <Formik onSubmit={this.handleLogInSubmit}>
          {({ handleSubmit, error }) => (
            <div>
              <h2>Log In</h2>
              <Field
                className="contact-email-form"
                name="username"
                type="email"
                placeholder="Username"
                aria-label="Username input field"
              />
              <Field
                className="contact-email-form"
                name="password"
                type="password"
                placeholder="Password"
                aria-label="Password input field"
              />
              <p className="login-form-error">
                {(error || apiError) &&
                  'Error occurred when log in, please retry'}
              </p>
              <button
                className="contact-email-submit"
                type="button"
                onClick={handleSubmit}
              >
                {loading ? 'Loading' : 'Log In'}
              </button>
            </div>
          )}
        </Formik>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
})

const mapDispatchToProps = {
  login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm)
