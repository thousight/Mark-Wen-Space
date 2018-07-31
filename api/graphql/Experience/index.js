import addExperience from './addExperience'
import allExperiences from './allExperiences'
import getExperienceById from './getExperienceById'
import updateExperience from './updateExperience'
import deleteExperience from './deleteExperience'

const typeDef = `
  type Experience {
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
    allExperiences,
    getExperienceById
  },
  Mutation: {
    addExperience,
    updateExperience,
    deleteExperience
  }
}

export default {
  typeDef,
  resolvers
}