import React, { Component } from 'react';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Map, Marker as BMapMarker } from 'react-bmap';
import { Row, Col, Modal } from 'react-bootstrap';

import envelope from '../img/icons/envelope.svg';
import home from '../img/icons/home.svg';
import phone from '../img/icons/phone.svg';
import navigation from '../img/icons/navigation.svg';

/**
* Static Contact page, able to send email to Mark and view Google Maps
*/
class Contact extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isShowRecaptchaModal: false,
			isGoogleAvailable: true
		}

		this.sendEmail = this.sendEmail.bind(this);
		this.hanleEmailSubmit = this.hanleEmailSubmit.bind(this);
	}

	componentWillMount() {
		// Check if google is available
		if (!window['google']){
			this.setState({isGoogleAvailable: false});
		}
	}

	componentDidMount() {
		// Grab variables
		this.nameInput = document.getElementById("name");
		this.fromEmailInput = document.getElementById("fromEmail");
		this.subjectInput = document.getElementById("subject");
		this.messageInput = document.getElementById("message");
		this.submitButton = document.getElementById("submitButton");
		this.submitText = document.getElementById("submitText");
	}

	/**
	* Dismis modal and send email through API
	*/
	sendEmail() {
		this.setState({ isShowRecaptchaModal: false });

		axios.post('http://mark-wen-space-v3-server.herokuapp.com/api/email/sendContactMessage', {
			fromEmail: `"${this.nameInput.value}" <${this.fromEmailInput.value}>`,
			subject: this.subjectInput.value,
			textBody: this.messageInput.value
		})
		.then(res => {
			// Clear fields
			this.nameInput.value = "";
			this.fromEmailInput.value = "";
			this.subjectInput.value = "";
			this.messageInput.value = "";

			this.setSubmitButtonMessage(true, "Email sent");
		})
		.catch(error => {
			console.log(error);
			this.setSubmitButtonMessage(false, "Error, see console");
		});
	}

	/**
	* Show modal when submit email if recaptcha is available
	*/
	hanleEmailSubmit() {
		if (window['recaptcha'] && window['grecaptcha']) {
			this.setState({ isShowRecaptchaModal: true });
		} else {
			this.sendEmail();
		}
	}

	/**
	* Show message in submit button to tell user if email is sent successfully or not
	* @param: status(boolean), message(String)
	*/
	setSubmitButtonMessage(status, message) {
		this.submitButton.style.background = status ? '#4caf50' : '#f44336';
		this.submitButton.classList.add('unclickable');
		this.submitText.innerHTML = message;

		setTimeout(() => {
			this.submitButton.style.background = '#008EFF';
			this.submitButton.classList.remove('unclickable');
			this.submitText.innerHTML = 'Submit';
		}, 3000);
	}

	render() {
		let GetGoogleMaps = null;
		if (this.state.isGoogleAvailable) {
			GetGoogleMaps = withGoogleMap(props => (
			 <GoogleMap
				 defaultZoom={15}
				 defaultCenter={{ lat: 40.450627, lng: -86.943996 }} >
					 <Marker position={{ lat: 40.450627, lng: -86.943996 }} />
			 </GoogleMap>
		 ))
		}

		return (
			<div className="contact">
				<div className="contact-title banner-title">
					<h1>Contact</h1>
				</div>

				<div className="container contact-content">
					<Row>
						<Col xs={12} sm={5} md={4} mdOffset={1}>
							<div className="card clickable-card contact-info">
								<div className="contact-info-line">
									<img className="contact-info-icon" alt="Email" src={envelope} />
									<a href="mailto:markwenguojie94@gmail.com">markwenguojie94@gmail.com</a>
								</div>
								<div className="contact-info-line">
									<img className="contact-info-icon" alt="Phone" src={phone} />
									<a href="tel:510-505-4398">(510) 505-4398</a>
								</div>
								<div className="contact-info-line">
									<img className="contact-info-icon" alt="Address" src={home} />
									<div className="contact-info-line-address">
										<a href="https://goo.gl/maps/f843LXUZbTL2" target="_blank" rel="noopener noreferrer">
											2120 McCormick Rd. Apt. 721b <br />West Lafayette, IN 47906
										</a>
									</div>
								</div>
							</div>
						</Col>

						<Col xs={12} sm={7} md={6}>
							<div className="card clickable-card contact-email">
								<h4>Shoot me a message!</h4>

								<input className="contact-email-form" id="name" type="text" placeholder="Name" aria-label="Name input field" />
								<input className="contact-email-form" id="fromEmail" type="email" placeholder="Email" aria-label="Email input field" />
								<input className="contact-email-form" id="subject" type="text" placeholder="Subject" aria-label="Subject input field" />
								<textarea className="contact-email-form" id="message" type="text" placeholder="Message" aria-label="Message input field" />

								<div className="contact-email-form-submit-wrapper">
									<a id="submitButton" className="contact-email-submit" onClick={this.hanleEmailSubmit}>
										<img className="contact-email-submit-icon" alt="submit" src={navigation} /><p id="submitText">Submit</p>
									</a>
								</div>
							</div>
						</Col>

						<Col xs={12} md={10} mdOffset={1}>
							<div className="card clickable-card contact-map">
								{
									this.state.isGoogleAvailable ?
										<GetGoogleMaps
											alt="Google Maps"
											containerElement={
												<div style={{ height: `100%` }} />
											}
											mapElement={
												<div style={{ height: `100%` }} />
											}  />
										:
										<Map style={{height: '450px', position: 'relative'}} center={{lng: -86.943996, lat: 40.450627}} zoom="15">
											<BMapMarker position={{lng: -86.943996, lat: 40.450627}} />
										</Map>
								}
							</div>
						</Col>
					</Row>
				</div>

				<Modal show={this.state.isShowRecaptchaModal} onHide={() => { this.setState({ isShowRecaptchaModal: false }) }}>
					<Recaptcha
						className="recaptcha"
						sitekey="6LcbFywUAAAAAPcecjPRbVVqzaR4vBQUqVRihzs_"
						verifyCallback={this.sendEmail}
					/>
				</Modal>
			</div>
		);
	}
}

export default Contact;
