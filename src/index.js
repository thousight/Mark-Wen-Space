import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './css/bootstrap/bootstrap.min.css';
import './index.css';

/**
* Index file where it renders all the JSX into public/index.html
*/
ReactDOM.render(
	<Router>
		<App />
  </Router>,
  document.getElementById('root')
);
