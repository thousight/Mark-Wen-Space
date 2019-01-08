import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

import graphqlServer from './graphql'
import useAPI from './controllers'
import { connectToMongo } from './libs/mongoose'
import usePassport from './libs/passport'

// Initialize variables
dotenv.config()
const app = express()

// Handle CORS
const whitelist = [
  undefined,
  'http://localhost:3000',
  'https://mark-wen-space-dev.herokuapp.com',
  'https://mark-wen-space.herokuapp.com',
  'https://www.markwen.space',
]

app.use(
  cors({
    origin: (origin, callback) => {
      // origin in whitelist or environment is local
      if (whitelist.includes(origin) || process.env.NODE_ENV === undefined) {
        callback(null, true)
      } else {
        console.log('CORS blocked this origin:')
        console.log(origin)
        callback(`${origin} is not allowed, blocked by CORS`, null)
      }
    },
    methods: 'POST,GET,PUT,DELETE,OPTIONS',
    allowedHeaders:
      'Origin, Content-Type, Accept, Authorization, X-Requested-With, X-Rate-Limit-Limit, X-Rate-Limit-Remaining, X-Rate-Limit-Reset',
    exposedHeaders: 'Authorization, token',
  }),
)
// Log every request to the console
app.use(morgan('dev'))
// Compress everything to speedup
app.use(
  compression({
    threshold: 0,
  }),
)
// Configure app to use bodyParser(), which will let us get the data from a POST
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
// Parse application/json
app.use(bodyParser.json())

// Serving public view
app.use(express.static('files'))
app.use('/', express.static('dist/public'))
app.get('*', (req, res, next) => {
  if (
    !(req.url.includes(graphqlServer.graphqlPath) || req.url.includes('/api'))
  ) {
    const currentDirectory = __dirname
    return res
      .set('Content-Type', 'text/html')
      .sendFile(`${currentDirectory}/public/index.html`)
  }
  return next()
})
// Registering passport
usePassport(app)
// Registering API router
useAPI(app)
// Registering GraphQL
graphqlServer.applyMiddleware({ app })
// Registering MongoDB
connectToMongo().then(() => {
  const port = process.env.PORT
  app.listen(port, err => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Apollo GraphQL is running at ${graphqlServer.graphqlPath}`)
      console.log(`API is running at /api`)
      console.log(`Listening on port ${port}.`)
    }
  })
})
