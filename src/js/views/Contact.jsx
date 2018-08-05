import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Map, Marker as BMapMarker } from 'react-bmap'
import { Row, Col } from 'react-bootstrap'

import SendEmailForm from '../components/SendEmailForm'

import envelope from '../../img/icons/envelope.svg'
import home from '../../img/icons/home.svg'
import phone from '../../img/icons/phone.svg'

/**
* Static Contact page, able to send email to Mark and view Google Maps
*/
class Contact extends Component {

	state = {
		isGoogleAvailable: true
	}

	componentWillMount() {
		// Check if google is available
		if (!window['google']){
			this.setState({isGoogleAvailable: false})
		}
	}

	render() {
		let GetGoogleMaps = null
		const location = { lat: 39.9071868, lng: -86.0848447 }

		if (this.state.isGoogleAvailable) {
			GetGoogleMaps = withGoogleMap(props => (
			 <GoogleMap
				 defaultZoom={15}
				 defaultCenter={location} >
					 <Marker position={location} />
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
						{/* Basic Contact Info */}
						<Col xs={12} sm={5} md={4} mdOffset={1}>
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
										<a href="https://goo.gl/maps/8Pb1tbu86472" target="_blank" rel="noopener noreferrer">
											8322 Lakeshore Trail East Drive
											<br />
											Apt. 921
											<br />
											Indianapolis, IN 46250
										</a>
									</div>
								</div>
							</div>
						</Col>

						{/* Send Email Message */}
						<Col xs={12} sm={7} md={6}>
							<SendEmailForm />
						</Col>

						{/* Maps */}
						<Col xs={12} md={10} mdOffset={1}>
							<div className="card contact-map">
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
										<Map style={{height: '450px', position: 'relative'}} center={location} zoom="15">
											<BMapMarker position={location} />
										</Map>
								}
							</div>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default Contact
