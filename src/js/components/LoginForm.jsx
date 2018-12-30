import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { Formik, Field } from 'formik'

import { LOG_IN } from '../utils/gql'

class LoginForm extends PureComponent {
  handleLogInSubmit = handleLogIn => values =>
    handleLogIn({ variables: values })

  handleLogInUpdate(cache, { data }) {
    if (data) {
      console.log(data)
      const { history } = this.props
      history.push('/admin')
    }
  }

  render() {
    return (
      <div className="card login-form">
        <Mutation mutation={LOG_IN} update={this.handleLogInUpdate}>
          {(handleLogIn, { loading, error }) => (
            <Formik onSubmit={this.handleLogInSubmit(handleLogIn)}>
              {({ handleSubmit }) => (
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
                    {error && 'Error occurred when log in, please retry'}
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
          )}
        </Mutation>
      </div>
    )
  }
}

export default withRouter(LoginForm)
