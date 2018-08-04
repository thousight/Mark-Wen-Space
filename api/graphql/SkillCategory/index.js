import addSkillCategory from './addSkillCategory'
import allSkillCategories from './allSkillCategories'
import getSkillCategoryById from './getSkillCategoryById'
import updateSkillCategory from './updateSkillCategory'
import deleteSkillCategory from './deleteSkillCategory'

const typeDef = `
  type SkillCategory {
    _id: String
    categoryTitle: String
    order: Int
    color: String
    skills: [ Skill ]
    createdAt: Date
    updatedAt: Date
  }
`
const resolvers = {
  Query: {
    allSkillCategories,
    getSkillCategoryById
  },
  Mutation: {
    addSkillCategory,
    updateSkillCategory,
    deleteSkillCategory
  }
}

export default {
  typeDef,
  resolvers
}