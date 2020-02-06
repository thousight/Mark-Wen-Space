import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { Map, Marker as BMapMarker } from 'react-bmap'
import { Row, Col } from 'react-bootstrap'

import { SendEmailForm, Footer } from '../../components'

/**
 * Static Contact page, able to send email to Mark and view Google Maps
 */
export default class Contact extends Component {
  state = {
    isGoogleAvailable: true,
  }

  componentDidMount() {
    // Check if google is available
    if (!window.google) {
      this.setState({ isGoogleAvailable: false })
    }
  }

  render() {
    const { isGoogleAvailable } = this.state

    let GetGoogleMaps = null
    const location = { lat: 39.9071868, lng: -86.0848447 }

    if (isGoogleAvailable) {
      GetGoogleMaps = withGoogleMap(() => (
        <GoogleMap defaultZoom={15} defaultCenter={location}>
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
            <Col xs={12} sm={5} md={4} mdOffset={1} lg={5} lgOffset={0}>
              <div className="card contact-info">
                <div className="contact-info-line">
                  <span className="contact-info-icon icon-home" />
                  <div className="contact-info-line-address">
                    <a
                      href="https://goo.gl/maps/8Pb1tbu86472"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
            <Col xs={12} sm={7} md={6} lg={7} lgOffset={0}>
              <SendEmailForm />
            </Col>

            {/* Maps */}
            <Col xs={12} md={10} mdOffset={1} lg={12} lgOffset={0}>
              <div className="card contact-map">
                {isGoogleAvailable ? (
                  <GetGoogleMaps
                    alt="Google Maps"
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                ) : (
                  <Map
                    style={{ height: '450px', position: 'relative' }}
                    center={location}
                    zoom="15"
                  >
                    <BMapMarker position={location} />
                  </Map>
                )}
              </div>
            </Col>
          </Row>
        </div>

        <Footer />
      </div>
    )
  }
}
