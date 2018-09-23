import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'

// Static Content
import Education from './Education'
import Experience from './Experience'
import Portfolio from './Portfolio'
import SkillCategory from './SkillCategory'
import Skill from './Skill'
import Style from './Style'
// Functional
import Email from './Email'
// Query and Mutation definitions
import Query from './Query'
import Mutation from './Mutation'
// Scalars
import Date from './Scalar/Date'
import json from './Scalar/Json'

const schema = makeExecutableSchema({
  typeDefs: [
    Date.typeDef,
    json.typeDef,

    Education.typeDef,
    Experience.typeDef,
    Portfolio.typeDef,
    SkillCategory.typeDef,
    Skill.typeDef,
    Style.typeDef,

    Email.typeDef,

    Query,
    Mutation,
  ],
  resolvers: [
    Date.resolver,
    json.resolver,

    Education.resolvers,
    Experience.resolvers,
    SkillCategory.resolvers,
    Portfolio.resolvers,
    Skill.resolvers,
    Style.resolvers,

    Email.resolvers,
  ],
})

const apolloServer = new ApolloServer({ schema })

export default apolloServer
