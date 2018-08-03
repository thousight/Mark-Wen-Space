import updateStyle from './updateStyle'

const typeDef = `
  type Style {
    _id: String
    primaryColor: String
    secondaryColor: String
    bannerImage: String
    createdAt: Date
    updatedAt: Date
  }
`
const resolvers = {
  Query: {

  },
  Mutation: {
    updateStyle
  }
}

export default {
  typeDef,
  resolvers
}