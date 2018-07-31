export default `
  type Query {
    # Education
    allEducations: [Education]
    getEducationById(_id: String!): Education

    # Experience
    allExperiences: [Experience]
    getExperienceById(_id: String!): Experience
  }
`