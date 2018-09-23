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
    title: String
    time: String
    order: Int
    image: String
    desc: [String]
    style: Style
    createdAt: Date
    updatedAt: Date
  }
`
const resolvers = {
  Query: {
    allExperiences,
    getExperienceById,
  },
  Mutation: {
    addExperience,
    updateExperience,
    deleteExperience,
  },
}

export default {
  typeDef,
  resolvers,
}
