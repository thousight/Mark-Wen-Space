import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { ToastContainer } from 'react-toastify'

import { Home, Resume, Portfolio, Contact } from './js/views'
import { NavigationBar, Footer, Sidebar, FullScreenLoading } from './js/components'

import homeBackground from './img/home.jpg'
import resumeBackground from './img/resume.jpg'
import portfolioBackground from './img/portfolio.png'
import contactBackground from './img/contact.jpg'


const QUERY_ALL_STATIC_CONTENT = gql`
{
	allEducations {
		_id
		organization
		city
		state
		degree
		time
		order
		image
		desc
		style {
			primaryColor
			secondaryColor
			bannerImage
		}
	}

	allExperiences {
		_id
		organization
		city
		state
		title
		time
		desc
		image
		order
		style {
			primaryColor
			secondaryColor
			bannerImage
		}
	}

	allPortfolios {
		_id
		title
		logo
		time
		desc
		keywords
		categories
		links
		order
		style {
			primaryColor
			secondaryColor
		}
	}

	allSkillCategories {
		_id
		categoryTitle
		order
		color
		skills {
			_id
			skillName
			percent
		}
	}
}
`


/**
* Root view where it includes the constant navbar and footer
* and the changing components based on routing
*/
class App extends Component {

	state = {
		imagesLoading: []
	}
	backgroundImages = [ homeBackground, resumeBackground, portfolioBackground, contactBackground ]

	componentWillMount() {
		this.backgroundImages.map(image => this.loadImage(image))
	}

	loadImage(image) {
		let temp = new Image()
		temp.src = image
		temp.onload = () => {
			this.setState({ imagesLoading: [ ...this.state.imagesLoading, true ] })
		}
	}

	render() {
		const { imagesLoading } = this.state

		return (
			<Query query={QUERY_ALL_STATIC_CONTENT}>
				{({ loading, error, data }) => {
					if (!loading && data) {
						// this.props.setStaticContent(data)
					}
					let isLoading = !loading && !error && imagesLoading.length === this.backgroundImages.length 

					return (
						<ReactCSSTransitionGroup
							transitionName="fade"
							transitionEnterTimeout={700}
							transitionLeaveTimeout={700}>
							{
								// Check if API content are fetched and background images are loaded
								isLoading ?
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
											</Switch>

										</ReactCSSTransitionGroup>
										
										<ToastContainer
											toastClassName="toast-style"
											closeButton={false}
											autoClose={5000} />

										<Footer />
									</div>
								:
								<FullScreenLoading key={2} errorText={error ? error : ''} />
							}
						</ReactCSSTransitionGroup>
					)
				}}
			</Query>
		)
	}
}

export default withRouter(App)
