import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    allEducations: [Education]
    getEducationById(_id: String!): Education
  }
`