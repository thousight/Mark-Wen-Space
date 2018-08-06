import sendEmail from './sendEmail'

const typeDef = `
  type Email {
    fromEmail: String
    subject: String
    textBody: String
  }
`
const resolvers = {
  Query: {

  },
  Mutation: {
    sendEmail
  }
}

export default {
  typeDef,
  resolvers
}