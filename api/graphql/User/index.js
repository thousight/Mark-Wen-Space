import getUserById from './getUserById'
import updateUserById from './updateUserById'

const typeDef = `
  type User {
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
  Query: {
    getUserById,
  },
  Mutation: {
    updateUserById,
  },
}

export default {
  typeDef,
  resolvers,
}
