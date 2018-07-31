import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'

import Education from './Education'
import Experience from './Experience'
import Style from './Style'
import Query from './Query'
import Mutation from './Mutation'

const schema = makeExecutableSchema({
    typeDefs: [
        Education.typeDef,
        Experience.typeDef,
        Style.typeDef,
        Query,
        Mutation
    ],
    resolvers: [
        Education.resolvers,
        Experience.resolvers,
        Style.resolvers
    ]
})

const apolloServer = new ApolloServer({ schema })

export default apolloServer