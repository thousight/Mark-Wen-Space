import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import profilePic from '../img/profilePic.jpg';

/**
* Static Home page
*/
class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="home-landing">
					<div className="home-title">
						<h1>Mark Wen</h1>
						<p>Web and Android Developer</p>
					</div>
					<div className="home-logos">

					</div>
				</div>

				<div className="container">
					<Row className="home-cards">
						<Col xs={12} sm={10} smOffset={1}>
							<div className="card home-intro-card">
								<img className="home-profile-pic" alt="profile" src={profilePic} />
								<h3>Hi, I'm Mark!</h3>
								<p>
									My legal name is Guojie Wen, since my Chinese name is 温国杰. I'm pursuing my bachelor degree as a 4th-year
									Computer and Information Technology major in Purdue University. I'm passionate in developing and designing
									websites and applications. I personally believe that every detail worths tweaking, and it's always an enjoyable process.
								</p>
							</div>
						</Col>
						<Col xs={12} sm={10} smOffset={1}>
							<div className="card home-hobbies-card">
								<h3>Hobbies</h3>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Home;
