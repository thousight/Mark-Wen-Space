import updateSkill from './updateSkill'

const typeDef = `
  type Skill {
    _id: String
    skillName: String
    percent: Int
    createdAt: Date
    updatedAt: Date
  }
`
const resolvers = {
  Query: {

  },
  Mutation: {
    updateSkill
  }
}

export default {
  typeDef,
  resolvers
}