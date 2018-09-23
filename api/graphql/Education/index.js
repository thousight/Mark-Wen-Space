import addEducation from './addEducation'
import allEducations from './allEducations'
import getEducationById from './getEducationById'
import updateEducation from './updateEducation'
import deleteEducation from './deleteEducation'

const typeDef = `
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
    createdAt: Date
    updatedAt: Date
  }
`
const resolvers = {
  Query: {
    allEducations,
    getEducationById,
  },
  Mutation: {
    addEducation,
    updateEducation,
    deleteEducation,
  },
}

export default {
  typeDef,
  resolvers,
}
