import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { Home, Resume, Portfolio, Contact } from './js';
import { NavigationBar, Footer, Sidebar, FullScreenLoading } from './js/components';
import {
	isStaticAPIFetched,
	setStaticEDUContent,
	setStaticEXPContent,
	setStaticSkillsContent,
	setStaticPortfolioContent
  } from './js/redux/actions';

import homeBackground from './img/home.jpg';
import resumeBackground from './img/resume.jpg';
import portfolioBackground from './img/portfolio.png';
import contactBackground from './img/contact.jpg';


/**
* Root view where it includes the constant navbar and footer
* and the changing components based on routing
*/
class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loadingError: '',
			homeBackgroundImageLoading: false,
			resumeBackgroundImageLoading: false,
			portfolioBackgroundImageLoading: false,
			contactBackgroundImageLoading: false
		}
	}

	componentWillMount() {
		// Variables to load background images
		this.homeBackgroundImage = new Image();
		this.homeBackgroundImage.src = homeBackground;
		this.homeBackgroundImage.onload = () => {
			this.setState({homeBackgroundImageLoading: true});
		};

		this.resumeBackgroundImage = new Image();
		this.resumeBackgroundImage.src = resumeBackground;
		this.resumeBackgroundImage.onload = () => {
			this.setState({resumeBackgroundImageLoading: true});
		};

		this.portfolioBackgroundImage = new Image();
		this.portfolioBackgroundImage.src = portfolioBackground;
		this.portfolioBackgroundImage.onload = () => {
			this.setState({portfolioBackgroundImageLoading: true});
		};

		this.contactBackgroundImage = new Image();
		this.contactBackgroundImage.src = contactBackground;
		this.contactBackgroundImage.onload = () => {
			this.setState({contactBackgroundImageLoading: true});
		};
	}

	componentDidMount() {
		// Fetch all static data from API
		axios.get('https://mark-wen-space-v3-server.herokuapp.com/api/allStaticContent', { timeout: 20000 })
		    .then(res => {
					this.props.setStaticEDUContent(res.data.Edu);
					this.props.setStaticEXPContent(res.data.Exp);
					this.props.setStaticSkillsContent(res.data.Skills);
					this.props.setStaticPortfolioContent(res.data.Portfolio);

					// Dismiss full screen loading
					setTimeout(() => {this.props.isStaticAPIFetched(true)}, 300);
		    })
		    .catch(error => {
					this.props.isStaticAPIFetched(false);
					this.setState({loadingError: error.message});
		    });
	}

	render() {
		return (
			<div id="root-view">
				<ReactCSSTransitionGroup
					transitionName="fade"
					transitionEnterTimeout={700}
					transitionLeaveTimeout={700}>
					{
						// Check if API content are fetched and background images are loaded
						(
							this.props.appSettings.isStaticAPIFetched &&
							this.state.homeBackgroundImageLoading &&
							this.state.resumeBackgroundImageLoading &&
							// this.state.portfolioBackgroundImageLoading &&
							this.state.contactBackgroundImageLoading
						) ?
							<div key={1} >
								<Sidebar />
								<NavigationBar />

								<ReactCSSTransitionGroup
									transitionName="fade"
									transitionEnterTimeout={500}
									transitionLeaveTimeout={500}>

									<Switch key={this.props.location.pathname} location={this.props.location}>
										<Route exact path="/" component={Home} />
										<Route path="/resume" component={Resume} />
										<Route path="/portfolio" component={Portfolio} />
										<Route path="/contact" component={Contact} />
									</Switch>

								</ReactCSSTransitionGroup>

								<Footer />
							</div>
						:
						<FullScreenLoading key={2} errorText={this.state.loadingError}/>
					}
				</ReactCSSTransitionGroup>

			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		isStaticAPIFetched,
		setStaticEDUContent,
		setStaticEXPContent,
		setStaticSkillsContent,
		setStaticPortfolioContent
	}, dispatch);
}

const mapStateToProps = state => {
	return {
		appSettings: state.appSettings
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
