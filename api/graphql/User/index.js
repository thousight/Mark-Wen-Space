import logIn from './logIn'
import signUp from './signUp'

const typeDef = `
  type Skill {
    _id: String
    firstName: String
    lastName: String
    username: String
    password: String
    image: String
    type: String
    createdAt: Date
    updatedAt: Date
  }
`
const resolvers = {
  Query: {},
  Mutation: {
    logIn,
    signUp,
  },
}

export default {
  typeDef,
  resolvers,
}
