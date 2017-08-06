import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Home, Resume, Portfolio, Contact } from './js';
import { NavigationBar, Footer, Sidebar } from './js/components';

/**
* Root view where it includes the constant navbar and footer
* and the changing components based on routing
*/
class App extends Component {

	render() {
		return (
			<div id="root-view">
				{/* <Sidebar /> */}
				<NavigationBar />

				<Route exact path="/" component={Home} />
				{/* <Route path="/resume" component={Resume} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/contact" component={Contact} /> */}

				<Footer />
			</div>
		);
	}
}

export default App;
