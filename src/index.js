import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import rootReducer from './js/redux/reducers/index'
import history from './js/utils/history'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './style/bootstrap/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './style/fontello.css'
import './index.less'

// Redux logger
const reduxLogger = createLogger({
  diff: true,
})
// Redux store
const store = createStore(rootReducer, applyMiddleware(thunk, reduxLogger))
// Apollo GraphQL client
const client = new ApolloClient({ uri: process.env.REACT_APP_GRAPHQL_URI })

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()

if (module.hot) {
  module.hot.accept('./js/redux/reducers', () => {
    store.replaceReducer(rootReducer)
  })
}
