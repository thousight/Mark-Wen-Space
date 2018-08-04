export default `
  type Mutation {
    # Education
    addEducation(
      organization: String!,
      city: String!,
      state: String!,
      degree: String!,
      time: String!,
      order: Int!,
      image: String!,
      desc: [String]!,
      primaryColor: String!,
      secondaryColor: String!,
      bannerImage: String
    ): Education

    updateEducation(
      _id: String!,
      organization: String,
      city: String,
      state: String,
      degree: String,
      time: String,
      order: Int,
      image: String,
      desc: [String]
    ): Education

    deleteEducation(
      _id: String!,
      styleId: String!
    ): Education


    # Experience
    addExperience(
      organization: String!,
      city: String!,
      state: String!,
      title: String!,
      time: String!,
      order: Int!,
      image: String!,
      desc: [String]!,
      primaryColor: String!,
      secondaryColor: String!,
      bannerImage: String
    ): Experience

    updateExperience(
      _id: String!,
      organization: String,
      city: String,
      state: String,
      title: String,
      time: String,
      order: Int,
      image: String,
      desc: [String],
    ): Experience

    deleteExperience(
      _id: String!,
      styleId: String!
    ): Experience


    # Portfolio
    addPortfolio(
      title: String!,
      logo: String!,
      time: String!,
      desc: String!,
      keywords: String!,
      categories: [ String ]!,
      order: Int!,
      primaryColor: String!,
      secondaryColor: String!,
      bannerImage: String
    ): Portfolio

    updatePortfolio(
      _id: String!,
      title: String,
      logo: String,
      time: String,
      desc: String,
      keywords: String,
      categories: [ String ],
      order: Int
    ): Portfolio

    deletePortfolio(
      _id: String!,
      styleId: String!
    ): Portfolio


    # SkillCategory
    addSkillCategory(
      categoryTitle: String,
      order: Int!,
      color: String!,
      skills: [ String ],
    ): SkillCategory

    updateSkillCategory(
      _id: String!,
      categoryTitle: String,
      order: Int,
      color: String,
      skills: [ String ],
    ): SkillCategory

    deleteSkillCategory(
      _id: String!
    ): SkillCategory


    # Skill
    addSkill(
      skillName: String!,
      percent: Int!
    ): Skill
    
    updateSkill(
      _id: String!,
      skillName: String,
      percent: Int
    ): Skill


    # Style
    updateStyle(
      _id: String!,
      primaryColor: String,
      secondaryColor: String,
      bannerImage: String
    ): Style


    # Email
    sendEmail(
      fromEmail: String!, 
      subject: String!,
      textBody: String!
    ): JSON
  }
`