import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import morgan from 'morgan'
import cors from 'cors'

import graphqlServer from './graphql'
import { connectToMongo } from './libs/mongoose'

// Initialize express.js
const app = express()

// Handle CORS
const whitelist = ['https://mark-wen-space-dev.herokuapp.com', 'https://mark-wen-space.herokuapp.com', 'https://www.markwen.space']
app.use(cors({
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || process.env.NODE_ENV === undefined) { // origin in whitelist or environment is local
      callback(null, true)
    } else {
      console.log('CORS blocked this origin:')
      console.log(origin)
      callback(`${origin} is not allowed, blocked by CORS`, null)
    }
  },
  methods: 'POST,GET,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Origin, Content-Type, Accept, token, X-Requested-With, X-Rate-Limit-Limit, X-Rate-Limit-Remaining, X-Rate-Limit-Reset',
  exposedHeaders: 'token'
}))
// Log every request to the console
app.use(morgan('dev'))
// Compress everything to speedup
app.use(compression({
  threshold: 0
}))
// Configure app to use bodyParser(), which will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}))
// Parse application/json
app.use(bodyParser.json())

// Serving public view
app.use(express.static('files'))
app.use('/', express.static('dist/public'))
// Registering graphql
graphqlServer.applyMiddleware({ app })

connectToMongo().then(() => {
  let port = process.env.PORT || require('../config').port
  app.listen(port, err => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Apollo GraphQL is running at ${graphqlServer.graphqlPath}`);
      console.log(`Listening on port ${port}.`)
    }
  })
})