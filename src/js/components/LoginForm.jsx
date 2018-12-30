import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { Formik, Field } from 'formik'
import Recaptcha from 'react-recaptcha'

class LoginForm extends PureComponent {
  render() {
    return (
      <div className="card login-form">
        <div className="banner-title">
          <h1>Log In</h1>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginForm)
