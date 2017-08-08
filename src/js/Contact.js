import React, { Component } from 'react';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';
import { Row, Col } from 'react-bootstrap';

import envelope from '../img/icons/envelope.svg';
import home from '../img/icons/home.svg';
import phone from '../img/icons/phone.svg';

/**
* Static Contact page, able to send email to Mark
*/
class Contact extends Component {

	sendEmail() {
		axios.post('http://mark-wen-space-v3-server.herokuapp.com/sendEmail', {
			fromEmail: 'wen56@purdue.edu',
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
								<Recaptcha
									className="contact-recaptcha"
									siteKey="6LcbFywUAAAAAPcecjPRbVVqzaR4vBQUqVRihzs_"
									onloadCallback={this.sendEmail}
									type="image"
									/>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Contact;
