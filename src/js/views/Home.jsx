import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Modal } from 'react-bootstrap'

import { HomeIcon, Footer, LoginForm } from '../components'
import history from '../utils/history'

import profilePic from '../../img/profilePic.jpg'
import smartphone from '../../img/icons/smartphone.svg'
import camera from '../../img/icons/camera.svg'
import car from '../../img/icons/car.svg'
import badminton from '../../img/icons/badminton.svg'

/**
 * Static Home page
 */
class Home extends PureComponent {
  state = {
    showLoginForm: false,
  }

  toggleLoginForm = () => {
    const { currentUser } = this.props

    if (currentUser) {
      history.push('/admin')
    } else {
      this.setState(({ showLoginForm }) => ({ showLoginForm: !showLoginForm }))
    }
  }

  render() {
    const { showLoginForm } = this.state

    return (
      <div className="home">
        <div className="home-landing">
          <div className="home-title">
            <h1>Mark Wen</h1>
            <p>Full Stack Developer</p>
          </div>
          <div className="home-landing-icons-wrapper">
            <HomeIcon
              name="Resume"
              link="https://drive.google.com/file/d/0B3-82hcS8hjnSkdOaXREQWJQY2M/view?usp=sharing"
            />

            <HomeIcon
              name="LinkedIn"
              link="https://linkedin.com/in/guojiewen"
            />

            <HomeIcon name="Github" link="https://github.com/thousight" />

            <HomeIcon name="500px" link="https://500px.com/markwenguojie94" />
          </div>
        </div>

        <div className="container">
          <Row className="home-cards">
            <Col xs={12} md={10} mdOffset={1} lg={12} lgOffset={0}>
              <div className="card home-intro-card">
                <button
                  className="home-profile-toggle"
                  type="button"
                  onDoubleClick={this.toggleLoginForm}
                >
                  <img
                    className="home-profile-pic"
                    alt="profile"
                    src={profilePic}
                  />
                </button>
                <h3>Hi, I&lsquo;m Mark!</h3>
                <p>
                  My legal name is Guojie Wen since my Chinese name is 温国杰.
                  I&lsquo;m a full-stack developer graduated from Purdue
                  University with a Computer and Information Technology bachelor
                  degree. I&lsquo;m passionate about designing and developing
                  websites as well as mobile applications. I personally believe
                  that every detail worths tweaking, and it&lsquo;s always an
                  enjoyable process.
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

        <Modal
          bsClass="login-form-modal"
          show={showLoginForm}
          onHide={this.toggleLoginForm}
          bsStyle="lg"
        >
          <Modal.Body>
            <LoginForm />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
})

export default connect(mapStateToProps)(Home)
