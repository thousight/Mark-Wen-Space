import React, { PureComponent } from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

import profilePic from '../../img/profilePic.jpg';
import smartphone from '../../img/icons/smartphone.svg';
import camera from '../../img/icons/camera.svg';
import car from '../../img/icons/car.svg';
import badminton from '../../img/icons/badminton.svg';

/**
* Static Home page
*/
class Home extends PureComponent {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	getPopover(name) {
		return (
			<Tooltip id="hobbies" className="portfolio-modal-cat-icon-popover">
				{name}
			</Tooltip>
		)
	}

	render() {
		return (
			<div className="home">
				<div className="home-landing">
					<div className="home-title">
						<h1>Mark Wen</h1>
						<p>Full Stack Developer</p>
					</div>
					<div className="home-landing-icons-wrapper">
						<a className="home-landing-icon home-landing-icon-file"
							href="https://drive.google.com/file/d/0B3-82hcS8hjnSkdOaXREQWJQY2M/view?usp=sharing"
							target="_blank" rel="noopener noreferrer">Resume</a>
						<a className="home-landing-icon home-landing-icon-linkedin"
							href="https://linkedin.com/in/guojiewen"
							target="_blank" rel="noopener noreferrer">LinkedIn</a>
						<a className="home-landing-icon home-landing-icon-github"
							href="https://github.com/thousight"
							target="_blank" rel="noopener noreferrer">Github</a>
						<a className="home-landing-icon home-landing-icon-500px"
							href="https://500px.com/markwenguojie94"
							target="_blank" rel="noopener noreferrer">500px</a>
					</div>
				</div>

				<div className="container">
					<Row className="home-cards">
						<Col xs={12} md={10} mdOffset={1}>
							<div className="card home-intro-card">
								<img className="home-profile-pic" alt="profile" src={profilePic} />
								<h3>Hi, I'm Mark!</h3>
								<p>
									My legal name is Guojie Wen since my Chinese name is 温国杰.
									I'm a full-stack developer graduated from Purdue University
									with a Computer and Information Technology bachelor degree.
									I'm passionate about designing and developing websites as 
									well as mobile applications. I personally believe that every 
									detail worths tweaking, and it's always an enjoyable process.
								</p>
							</div>
						</Col>
						<Col xs={12} md={10} mdOffset={1}>
							<div className="card home-hobbies-card">
								<h3>Hobbies</h3>
								<Row className="home-hobbies-icons-wrapper">
									<Col xs={6} sm={3}>
										<OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={this.getPopover('Smartphone')}>
											<img className="home-hobbies-icon" alt="smartphone" src={smartphone} />
										</OverlayTrigger>
									</Col>
									<Col xs={6} sm={3}>
										<OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={this.getPopover('Photography')}>
											<img className="home-hobbies-icon" alt="camera" src={camera} />
										</OverlayTrigger>
									</Col>
									<Col xs={6} sm={3}>
										<OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={this.getPopover('Road Trip')}>
											<img className="home-hobbies-icon" alt="car" src={car} />
										</OverlayTrigger>
									</Col>
									<Col xs={6} sm={3}>
										<OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={this.getPopover('Badminton')}>
											<img className="home-hobbies-icon" alt="badminton" src={badminton} />
										</OverlayTrigger>
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
