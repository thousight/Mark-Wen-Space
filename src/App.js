import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Home, Resume, Portfolio, Contact } from './js';
import { NavigationBar, Footer, SidebarContent } from './js/components';

/**
* Root view where it includes the constant navbar and footer
* and the changing components based on routing
*/
class App extends Component {

	constructor(props) {
		super(props);
		this.states = {
			isSidebarOpened: false
		}

		this.openSidebar = this.openSidebar.bind(this);
  }

	/**
	* Trigger sidebar to open
	*/
	openSidebar() {
		this.setState({
			isSidebarOpened: !this.states.isSidebarOpened
		});
	}

	render() {
		return (
			<div id="root-view">
				<SidebarContent sidebarOpen={this.states.isSidebarOpened}/>
				<NavigationBar openSidebar={this.openSidebar} />

				<Route exact path="/" component={Home} />
				<Route path="/resume" component={Resume} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/contact" component={Contact} />

				<Footer />
			</div>
		);
	}
}

export default App;
