export default `
  type Query {
    # Education
    allEducations: [Education]
    getEducationById(_id: String!): Education

    # Experience
    allExperiences: [Experience]
    getExperienceById(_id: String!): Experience

    # Portfolio
    allPortfolios: [Portfolio]
    getPortfolioById(_id: String!): Portfolio

    # SkillCategory
    allSkillCategories: [SkillCategory]
    getSkillCategoryById(_id: String!): SkillCategory

    # User
    getUserById(
      _id: String!,
      token: String!,
    ): User
  }
`
