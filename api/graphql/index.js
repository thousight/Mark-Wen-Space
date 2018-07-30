import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'

import Education from './Education'
import Style from './Style'
import Query from './Query'

const schema = makeExecutableSchema({
    typeDefs: [
        Education.typeDef,
        Style.typeDef,
        Query
    ],
    resolvers: [
        Education.resolvers,
        Style.resolvers
    ]
})

export default new ApolloServer({ schema })