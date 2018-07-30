import { gql } from 'apollo-server-express'

const typeDef = gql`
  type Style {
    _id: String
    primaryColor: String
    secondaryColor: String
    bannerImage: String
  }
`
const resolvers = {
  Query: {

  }
}

export default {
  typeDef,
  resolvers
}