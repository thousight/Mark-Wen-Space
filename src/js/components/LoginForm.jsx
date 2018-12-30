import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { Formik, Field } from 'formik'

import { LOG_IN } from '../utils/gql'

class LoginForm extends PureComponent {
  render() {
    return (
      <div className="card login-form">
        <Mutation
          mutation={LOG_IN}
          update={this.handleSendEmailUpdate}
          onError={this.handleSendEmailError}
        >
          {(handleLogIn, { loading }) => (
            <Formik onSubmit={handleLogIn}>
              {({ handleSubmit, values }) => (
                <div>
                  <Field
                    className="contact-email-form"
                    name="username"
                    type="text"
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
