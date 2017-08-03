import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from 'react-sidebar';

import { Home, Resume, Portfolio, Contact } from './js';
import { NavigationBar, Footer, SidebarContent } from './js/components';

/**
* Root view where it includes the constant navbar and footer
* and the changing components based on routing
*/
class App extends Component {

	constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

	onSetSidebarOpen() {
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  }

	render() {
		return (
			<Sidebar
				sidebarClassName="sidebar"
				sidebar={SidebarContent}
				pullRight
				open={this.state.sidebarOpen}
				onSetOpen={this.onSetSidebarOpen}>
				<div className="root-view">
					<NavigationBar toggleOnClick={this.onSetSidebarOpen} />

					<Route exact path="/" component={Home} />
					<Route path="/resume" component={Resume} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/contact" component={Contact} />

					<Footer />
				</div>
			</Sidebar>
		);
	}
}

export default App;
