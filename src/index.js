import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import { Home, Resume } from './js';
import './index.css';

ReactDOM.render(
	<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
			<Route path="resume" component={Resume} />
			<Route path="portfolio" component={Portfolio} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);
