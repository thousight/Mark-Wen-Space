import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Recaptcha from 'react-recaptcha'
import { toast } from 'react-toastify'

import navigation from '../../img/icons/navigation.svg'

const SEND_EMAIL = gql`
	mutation SendEmail($name: String!, $fromEmail: String!, $subject: String, $textBody: String!) {
		sendEmail(
			name: $name
			fromEmail: $fromEmail
			subject: $subject
			textBody: $textBody
		)
	}
`

class SendEmailForm extends Component {

    state = {
        name: '',
        fromEmail: '',
        subject: '',
        message: '',
        isShowRecaptchaModal: false
    }

    /**
	* When a email is successfully sent, toast a message
	*/
    componentWillReceiveProps(nextProps) {
        if (this.props.loading && !nextProps.loading) {
            let { error } = nextProps
            if (error) {
                toast.error(error.message ? error.message : 'Something is wrong when sending email')
            } else {
                toast('Email successfully sent!')
            }
        }
    }

	/**
	* Change input values
	*/
	updateEmailInputFields(key, value) {
		this.setState({ [key]: value })
	}

	/**
	* Show modal when submit email if recaptcha is available
	*/
	hanleEmailSubmit(callback) {
		if (window['recaptcha'] && window['grecaptcha']) {
			this.setState({ isShowRecaptchaModal: true })
		} else {
			callback()
		}
    }
    
    handleSendEmail(sendEmail, name, fromEmail, subject, message) {
        sendEmail({ variables: { name, fromEmail, subject, textBody: message } })
        this.setState({ isShowRecaptchaModal: false })
    }

    render() {
        const { name, fromEmail, subject, message, isShowRecaptchaModal } = this.state
        const { sendEmail, loading } = this.props
        
        return (
            <div className="card contact-email">
                <h4>Shoot me a message!</h4>

                <form onSubmit={e => {
                        e.preventDefault()
                        this.hanleEmailSubmit(() => this.handleSendEmail(sendEmail, name, fromEmail, subject, message))
                    }}>
                    <input className="contact-email-form" 
                        value={name}
                        onChange={e => this.updateEmailInputFields('name', e.target.value)}
                        type="text"
                        placeholder="Name" 
                        aria-label="Name input field" />

                    <input className="contact-email-form" 
                        value={fromEmail} 
                        onChange={e => this.updateEmailInputFields('fromEmail', e.target.value)}
                        type="email" 
                        placeholder="Email"
                        aria-label="Email input field" />

                    <input className="contact-email-form" 
                        value={subject} 
                        onChange={e => this.updateEmailInputFields('subject', e.target.value)}
                        type="text" 
                        placeholder="Subject" 
                        aria-label="Subject input field" />

                    <textarea className="contact-email-form" 
                        value={message} 
                        onChange={e => this.updateEmailInputFields('message', e.target.value)}
                        type="text" 
                        placeholder="Message" 
                        aria-label="Message input field" />

                    <div className="contact-email-form-submit-wrapper">
                        <button className="contact-email-submit" type="submit">
                            <img className="contact-email-submit-icon" alt="submit" src={navigation} />
                            <p>{loading ? 'Loading' : 'Submit'}</p>
                        </button>
                    </div>
                </form>
                <Modal show={isShowRecaptchaModal} onHide={() => { this.setState({ isShowRecaptchaModal: false }) }}>
                    <Recaptcha
                        className="recaptcha"
                        sitekey={process.env.REACT_APP_RECAPTCHA}
                        verifyCallback={() => this.handleSendEmail(sendEmail, name, fromEmail, subject, message)} />
                </Modal>
            </div>
        )
    }
}

export default () => (
    <Mutation mutation={SEND_EMAIL}>
        {(sendEmail, { loading, error }) => (
            <SendEmailForm sendEmail ={sendEmail}
                loading={loading}
                error={error} />
        )}
    </Mutation>
)