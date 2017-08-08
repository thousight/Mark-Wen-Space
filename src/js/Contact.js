import React, { Component } from 'react';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';
import { Row, Col } from 'react-bootstrap';

import envelope from '../img/icons/envelope.svg';
import home from '../img/icons/home.svg';
import phone from '../img/icons/phone.svg';
import navigation from '../img/icons/navigation.svg';

/**
* Static Contact page, able to send email to Mark
*/
class Contact extends Component {

	sendEmail() {
		axios.post('http://mark-wen-space-v3-server.herokuapp.com/sendEmail', {
			fromEmail: '"Mark Wen" <wen56@purdue.edu>',
			subject: 'test',
			textBody: 'testtesttest'
		})
		.then(res => {
			console.log(res);
		})
		.catch(error => {
			console.log(error);
		});
	}

	hanleEmailSubmit() {
		
	}

	render() {
		return (
			<div className="contact">
				<div className="contact-title">
					<h1>Contact</h1>
				</div>

				<div className="container contact-content">
					<Row>
						<Col xs={12} sm={5}>
							<div className="card contact-info">
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
											2120 McCormick Rd. Apt. 721b West Lafayette, IN 47906
										</a>
									</div>
								</div>
							</div>
						</Col>

						<Col xs={12} sm={7}>
							<div className="card contact-email">
								<h4>Shoot me a message!</h4>
								<input className="contact-email-form" id="name" type="text" placeholder="Name" />
								<input className="contact-email-form" id="fromEmail" type="email" placeholder="Email" />
								<input className="contact-email-form" id="subject" type="text" placeholder="Subject" />
								<textarea className="contact-email-form" id="message" type="text" placeholder="Message" />
								<div className="contact-email-form-submit-wrapper">
									<a className="contact-email-submit" onClick={this.hanleEmailSubmit}>
										<img className="contact-email-submit-icon" alt="submit" src={navigation} /><p>Submit</p>
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Contact;
