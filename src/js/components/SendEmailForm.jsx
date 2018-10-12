import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import Recaptcha from 'react-recaptcha'
import { Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'

import { SEND_EMAIL } from '../utils/gql'

import navigation from '../../img/icons/navigation.svg'

class SendEmailForm extends Component {
  sendEmail = null

  state = {
    name: '',
    fromEmail: '',
    subject: '',
    message: '',
    isShowRecaptchaModal: false,
  }

  /**
   * Show modal when submit email if recaptcha is available
   */
  handleEmailSubmit = e => {
    e.preventDefault()

    if (window.recaptcha && window.grecaptcha) {
      this.setState({ isShowRecaptchaModal: true })
    } else {
      this.handleSendEmail()
    }
  }

  handleSendEmail = () => {
    const { name, fromEmail, subject, message } = this.state

    if (this.sendEmail) {
      this.sendEmail({
        variables: {
          name,
          fromEmail,
          subject,
          textBody: message,
        },
      })
    }
    this.setState({ isShowRecaptchaModal: false })
  }

  /**
   * Change input values
   */
  updateEmailInputFields(key, value) {
    this.setState({ [key]: value })
  }

  handleMutationUpdate(_, { error, data }) {
    if (error) {
      toast.error(
        error.message ? error.message : 'Something is wrong when sending email',
      )
    } else if (data) {
      toast('Email successfully sent!')
    }
  }

  render() {
    const {
      name,
      fromEmail,
      subject,
      message,
      isShowRecaptchaModal,
    } = this.state

    return (
      <Mutation mutation={SEND_EMAIL} update={this.handleMutationUpdate}>
        {(sendEmail, { loading }) => {
          this.sendEmail = sendEmail

          return (
            <div className="card contact-email">
              <h4>Shoot me a message!</h4>

              <form onSubmit={this.handleEmailSubmit}>
                <input
                  className="contact-email-form"
                  value={name}
                  onChange={e =>
                    this.updateEmailInputFields('name', e.target.value)
                  }
                  type="text"
                  placeholder="Name"
                  aria-label="Name input field"
                />

                <input
                  className="contact-email-form"
                  value={fromEmail}
                  onChange={e =>
                    this.updateEmailInputFields('fromEmail', e.target.value)
                  }
                  type="email"
                  placeholder="Email"
                  aria-label="Email input field"
                />

                <input
                  className="contact-email-form"
                  value={subject}
                  onChange={e =>
                    this.updateEmailInputFields('subject', e.target.value)
                  }
                  type="text"
                  placeholder="Subject"
                  aria-label="Subject input field"
                />

                <textarea
                  className="contact-email-form"
                  value={message}
                  onChange={e =>
                    this.updateEmailInputFields('message', e.target.value)
                  }
                  type="text"
                  placeholder="Message"
                  aria-label="Message input field"
                />

                <div className="contact-email-form-submit-wrapper">
                  <button className="contact-email-submit" type="submit">
                    <img
                      className="contact-email-submit-icon"
                      alt="submit"
                      src={navigation}
                    />
                    <p>{loading ? 'Loading' : 'Submit'}</p>
                  </button>
                </div>
              </form>
              <Modal
                show={isShowRecaptchaModal}
                onHide={() => this.setState({ isShowRecaptchaModal: false })}
              >
                <Recaptcha
                  className="recaptcha"
                  sitekey={process.env.REACT_APP_RECAPTCHA}
                  verifyCallback={this.handleSendEmail}
                />
              </Modal>
            </div>
          )
        }}
      </Mutation>
    )
  }
}

export default withRouter(SendEmailForm)
