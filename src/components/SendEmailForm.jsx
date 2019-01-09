import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { Formik, Field } from 'formik'
import Recaptcha from 'react-recaptcha'
import { Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'

import { SEND_EMAIL } from '../utils/gql'

import navigation from '../img/icons/navigation.svg'

class SendEmailForm extends Component {
  sendEmail = null

  state = {
    isShowRecaptchaModal: false,
  }

  /**
   * Show modal when submit email if recaptcha is available
   */
  handleEmailSubmit = sendEmail => values => {
    if (window.recaptcha && window.grecaptcha) {
      this.setState({ isShowRecaptchaModal: true })
    } else {
      this.handleSendEmail(sendEmail, values)()
    }
  }

  handleSendEmail = (sendEmail, values) => () => {
    const { name, fromEmail, subject, message } = values

    sendEmail({
      variables: {
        name,
        fromEmail,
        subject,
        textBody: message,
      },
    })
    this.hideRecaptchaModal()
  }

  hideRecaptchaModal = () => this.setState({ isShowRecaptchaModal: false })

  handleSendEmailUpdate(_, { data }) {
    if (data) {
      toast('Email successfully sent!')
    }
  }

  handleSendEmailError(error) {
    console.log(error)
    toast.error(
      error.message ? error.message : 'Something is wrong when sending email',
    )
  }

  render() {
    const { isShowRecaptchaModal } = this.state

    return (
      <Mutation
        mutation={SEND_EMAIL}
        update={this.handleSendEmailUpdate}
        onError={this.handleSendEmailError}
      >
        {(sendEmail, { loading }) => (
          <Formik onSubmit={this.handleEmailSubmit(sendEmail)}>
            {({ handleSubmit, values }) => (
              <div className="card contact-email">
                <h4>Shoot me a message!</h4>

                <Field
                  className="contact-email-form"
                  name="name"
                  type="text"
                  placeholder="Name"
                  aria-label="Name input field"
                />

                <Field
                  className="contact-email-form"
                  name="fromEmail"
                  type="text"
                  placeholder="Email"
                  aria-label="From email input field"
                />

                <Field
                  className="contact-email-form"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  aria-label="Subject input field"
                />

                <Field
                  className="contact-email-form"
                  name="message"
                  component="textarea"
                  type="text"
                  placeholder="Message"
                  aria-label="Message input field"
                />

                <div className="contact-email-form-submit-wrapper">
                  <button
                    className="contact-email-submit"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    <img
                      className="contact-email-submit-icon"
                      alt="submit"
                      src={navigation}
                    />
                    <p>{loading ? 'Loading' : 'Submit'}</p>
                  </button>
                </div>
                <Modal
                  show={isShowRecaptchaModal}
                  onHide={this.hideRecaptchaModal}
                >
                  <Recaptcha
                    className="recaptcha"
                    sitekey={process.env.REACT_APP_RECAPTCHA}
                    verifyCallback={this.handleSendEmail(sendEmail, values)}
                  />
                </Modal>
              </div>
            )}
          </Formik>
        )}
      </Mutation>
    )
  }
}

export default withRouter(SendEmailForm)
