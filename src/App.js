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

/**
* Root view where it includes the constant navbar and footer
* and the changing components based on routing
*/
class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loadingError: ''
		}
	}

	componentDidMount() {
		// Fetch all static data from API
		axios.get('http://mark-wen-space-v3-server.herokuapp.com/allStaticContent', { timeout: 10000 })
		    .then(res => {
					this.props.setStaticEDUContent(res.data.Edu);
					this.props.setStaticEXPContent(res.data.Exp);
					this.props.setStaticSkillsContent(res.data.Skills);
					this.props.setStaticPortfolioContent(res.data.Portfolio);

					// Dismiss full screen loading
					setTimeout(() => {this.props.isStaticAPIFetched(true)}, 500);
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
						this.props.appSettings.isStaticAPIFetched ?
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
