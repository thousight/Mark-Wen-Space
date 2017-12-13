import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './js/redux/reducers/index';
import App from './App';

import './css/bootstrap/bootstrap.min.css';
import './index.css';

/**
* Index file where it renders all the JSX into public/index.html
*/
const store = createStore(rootReducer);
const history = createHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
	  </Router>
	</Provider>,
  document.getElementById('root')
);
