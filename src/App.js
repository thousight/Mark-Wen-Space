import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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

	componentDidMount() {
		// Fetch all static data from API
		axios.get('http://mark-wen-space-v3-server.herokuapp.com/allStaticContent')
		    .then(res => {
					this.props.setStaticEDUContent(res.data.Edu);
					this.props.setStaticEXPContent(res.data.Exp);
					this.props.setStaticSkillsContent(res.data.Skills);
					this.props.setStaticPortfolioContent(res.data.Portfolio);

					this.props.isStaticAPIFetched(true);
		    })
		    .catch(error => {
					this.props.isStaticAPIFetched(false);
		    });
	}

	render() {
		return (
			<div id="root-view">
				{
					this.props.appSettings.isStaticAPIFetched ?
						<div>
							<Sidebar />
							<NavigationBar />

							<Route exact path="/" component={Home} />
							<Route path="/resume" component={Resume} />
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/contact" component={Contact} />

							<Footer />
						</div>
						:
						<FullScreenLoading />
				}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
