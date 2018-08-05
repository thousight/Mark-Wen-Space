import addPortfolio from './addPortfolio'
import allPortfolios from './allPortfolios'
import getPortfolioById from './getPortfolioById'
import updatePortfolio from './updatePortfolio'
import deletePortfolio from './deletePortfolio'

const typeDef = `
  type Portfolio {
    _id: String
    title: String
    logo: String
    time: String
    desc: String
    keywords: String
    categories: [ String ]
    links: JSON
    order: Int
    style: Style
    createdAt: Date
    updatedAt: Date
  }
`
const resolvers = {
  Query: {
    allPortfolios,
    getPortfolioById
  },
  Mutation: {
    addPortfolio,
    updatePortfolio,
    deletePortfolio
  }
}

export default {
  typeDef,
  resolvers
}