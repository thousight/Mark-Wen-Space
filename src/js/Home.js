import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import profilePic from '../img/profilePic.jpg';
import smartphone from '../img/icons/smartphone.svg';
import camera from '../img/icons/camera.svg';
import car from '../img/icons/car.svg';
import badminton from '../img/icons/badminton.svg';

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
					<div className="home-landing-icons-wrapper">
						<a className="home-landing-icon home-landing-icon-file"
							href="https://www.dropbox.com/s/ilyktq99v71774m/Guojie%20Wen%20Resume.pdf?dl=0"
							target="_blank" rel="noopener noreferrer" />
						<a className="home-landing-icon home-landing-icon-linkedin"
							href="https://linkedin.com/in/guojiewen"
							target="_blank" rel="noopener noreferrer" />
						<a className="home-landing-icon home-landing-icon-github"
							href="https://github.com/thousight"
							target="_blank" rel="noopener noreferrer" />
						<a className="home-landing-icon home-landing-icon-500px"
							href="https://500px.com/markwenguojie94"
							target="_blank" rel="noopener noreferrer" />
					</div>
				</div>

				<div className="container">
					<Row className="home-cards">
						<Col xs={12} sm={10} smOffset={1}>
							<div className="card home-intro-card">
								<img className="home-profile-pic" alt="profile" src={profilePic} />
								<h3>Hi, I'm Mark!</h3>
								<p>
									My legal name is Guojie Wen, since my Chinese name is 温国杰.
									I'm pursuing my bachelor degree as a 4th-year Computer and
									Information Technology major in Purdue University. I'm passionate
									in developing and designing websites and mobile applications.
									I personally believe that every detail worths tweaking, and
									it's always an enjoyable process.
								</p>
							</div>
						</Col>
						<Col xs={12} sm={10} smOffset={1}>
							<div className="card home-hobbies-card">
								<h3>Hobbies</h3>
								<Row className="home-hobbies-icons-wrapper">
									<Col xs={6} sm={3}>
										<img className="home-hobbies-icon" alt="smartphone" src={smartphone} />
										<h4>Smartphone</h4>
									</Col>
									<Col xs={6} sm={3}>
										<img className="home-hobbies-icon" alt="camera" src={camera} />
										<h4>Photography</h4>
									</Col>
									<Col xs={6} sm={3}>
										<img className="home-hobbies-icon" alt="car" src={car} />
										<h4>Road Trips</h4>
									</Col>
									<Col xs={6} sm={3}>
										<img className="home-hobbies-icon" alt="badminton" src={badminton} />
										<h4>Badminton</h4>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Home;
