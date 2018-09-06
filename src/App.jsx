import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Query } from 'react-apollo'
import { ToastContainer } from 'react-toastify'

import {
	Home,
	Resume,
	Portfolio,
	Contact,
	NotFound
} from './js/views'
import { NavigationBar, Sidebar, FullScreenLoading } from './js/components'
import { QUERY_ALL_STATIC_CONTENT } from './js/utils/gql'

import homeBackground from './img/home.jpg'
import resumeBackground from './img/resume.jpg'
import portfolioBackground from './img/portfolio.png'
import contactBackground from './img/contact.jpg'
import BlueLogoTransparentBG from './img/logo/BlueLogoTransparentBG.png'
import WhiteLogoTransparentBG from './img/logo/WhiteLogoTransparentBG.png'

const preloadImages = [
	homeBackground,
	resumeBackground,
	portfolioBackground,
	contactBackground,
	BlueLogoTransparentBG,
	WhiteLogoTransparentBG,
]

/**
* Root view where it includes the constant navbar and footer
* and the changing components based on routing
*/
class App extends Component {
	state = {
		imagesLoading: [],
	}

	componentWillMount() {
		preloadImages.map(image => this.loadImage(image))
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.imagesLoading.length === preloadImages.length
	}

	loadImage(image) {
		let temp = new Image()
		temp.src = image
		temp.onload = () => this.setState({ imagesLoading: [ ...this.state.imagesLoading, true ] })
	}

	render() {
		const { imagesLoading } = this.state

		return (
			<Query query={QUERY_ALL_STATIC_CONTENT}>
				{({ loading, error, data }) => (
					<ReactCSSTransitionGroup
						transitionName="fade"
						transitionEnterTimeout={700}
						transitionLeaveTimeout={700}
					>
						{
							// Check if API content are fetched and background images are loaded
							!loading && !error && imagesLoading.length === preloadImages.length
							? (
								<div key={1} >
									<Sidebar />
									<NavigationBar />

									<ReactCSSTransitionGroup
										transitionName="fade"
										transitionEnterTimeout={500}
										transitionLeaveTimeout={500}>

										<Switch key={this.props.location.pathname} location={this.props.location}>
											<Route exact path="/" component={Home} />
											<Route path="/resume" component={() => (
												<Resume 
													allEducations={data.allEducations}
													allExperiences={data.allExperiences}
													allSkillCategories={data.allSkillCategories} />
											)} />
											<Route path="/portfolio" component={() => (<Portfolio allPortfolios={data.allPortfolios} />)} />
											<Route path="/contact" component={Contact} />
											<Route component={NotFound} />
										</Switch>

									</ReactCSSTransitionGroup>
									
									<ToastContainer
										toastClassName="toast-style"
										closeButton={false}
										autoClose={5000} />
								</div>
							)
							: (<FullScreenLoading key={2} error={error} />)
						}
					</ReactCSSTransitionGroup>
				)}
			</Query>
		)
	}
}

export default withRouter(App)
