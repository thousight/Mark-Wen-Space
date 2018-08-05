import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import rootReducer from './js/redux/reducers/index'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './style/bootstrap/bootstrap.min.css'
import './index.css'

// Redux store
const store = createStore(rootReducer)
// Router history
const history = createHistory()
// Apollo GraphQL client
const graphqlURI = process.env.GRAPHQL_URI ? process.env.GRAPHQL_URI : 'http://localhost:2333/graphql'
const client = new ApolloClient({ uri: graphqlURI })

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<ApolloProvider client={client}>
				<App/>
			</ApolloProvider>
		</Router>
	</Provider>
, document.getElementById('root'))

registerServiceWorker()

if (module.hot) {
	module.hot.accept()
}