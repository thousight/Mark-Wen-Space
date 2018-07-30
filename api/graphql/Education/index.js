import { gql } from 'apollo-server-express'

import allEducations from './allEducations'
import getEducationById from './getEducationById'

const typeDef = gql`
  type Education {
    _id: String
    organization: String
    city: String
    state: String
    degree: String
    time: String
    order: Int
    image: String
    desc: [String]
    style: Style
  }
`
const resolvers = {
  Query: {
    allEducations,
    getEducationById
  }
}

export default {
  typeDef,
  resolvers
}