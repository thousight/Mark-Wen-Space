import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './js/redux/reducers/index';
import App from './App';

import './css/bootstrap/bootstrap.min.css';
import './index.css';

/**
* Index file where it renders all the JSX into public/index.html
*/
let store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
	  </Router>
	</Provider>,
  document.getElementById('root')
);
