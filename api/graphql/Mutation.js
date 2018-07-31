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


    # Style
    updateStyle(
      _id: String!,
      primaryColor: String,
      secondaryColor: String,
      bannerImage: String
    ): Style
  }
`