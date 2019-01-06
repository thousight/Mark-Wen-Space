import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'

import { login } from '../redux/actions/AuthActions'

class LoginForm extends PureComponent {
  handleLogInSubmit = values => {
    const { login } = this.props
    login(values)
  }

  render() {
    const { loading, error: apiError } = this.props

    return (
      <div className="card login-form">
        <Formik onSubmit={this.handleLogInSubmit}>
          {({ handleSubmit, error }) => (
            <div>
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
