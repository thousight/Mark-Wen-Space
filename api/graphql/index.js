import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'

// Schemas
import Education from './Education'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Style from './Style'
import Query from './Query'
import Mutation from './Mutation'

// Scalars
import Date from './Scalar/Date'

const schema = makeExecutableSchema({
    typeDefs: [
        Date.typeDef,

        Education.typeDef,
        Experience.typeDef,
        Portfolio.typeDef,
        Style.typeDef,
        Query,
        Mutation
    ],
    resolvers: [
        Date.resolver,

        Education.resolvers,
        Experience.resolvers,
        Portfolio.resolvers,
        Style.resolvers
    ]
})

const apolloServer = new ApolloServer({ schema })

export default apolloServer