import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

	componentDidMount() {
		this.sendEmail();
	}

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
				<h1>Contact</h1>
			</div>
		);
	}
}

export default Contact;
