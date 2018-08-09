import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { HomeIcon, Footer } from '../components'

import profilePic from '../../img/profilePic.jpg'
import smartphone from '../../img/icons/smartphone.svg'
import camera from '../../img/icons/camera.svg'
import car from '../../img/icons/car.svg'
import badminton from '../../img/icons/badminton.svg'

/**
* Static Home page
*/
const Home = () => (
	<div className="home">
		<div className="home-landing">
			<div className="home-title">
				<h1>Mark Wen</h1>
				<p>Full Stack Developer</p>
			</div>
			<div className="home-landing-icons-wrapper">
				<HomeIcon name="Resume" link="https://drive.google.com/file/d/0B3-82hcS8hjnSkdOaXREQWJQY2M/view?usp=sharing" />

				<HomeIcon name="LinkedIn" link="https://linkedin.com/in/guojiewen" />

				<HomeIcon name="Github" link="https://github.com/thousight" />

				<HomeIcon name="500px" link="https://500px.com/markwenguojie94" />
			</div>
		</div>

		<div className="container">
			<Row className="home-cards">
				<Col xs={12} md={10} mdOffset={1} lg={12} lgOffset={0}>
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
				<Col xs={12} md={10} mdOffset={1} lg={12} lgOffset={0}>
					<div className="card home-hobbies-card">
						<h3>Hobbies</h3>
						<Row className="home-hobbies-icons-wrapper">
							<Col xs={6} sm={3}>
								<HomeIcon name="Smartphone" icon={smartphone} />
							</Col>
							<Col xs={6} sm={3}>
								<HomeIcon name="Photography" icon={camera} />
							</Col>
							<Col xs={6} sm={3}>
								<HomeIcon name="Road Trip" icon={car} />
							</Col>
							<Col xs={6} sm={3}>
								<HomeIcon name="Badminton" icon={badminton} />
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</div>

		<Footer />
	</div>
)

export default Home
