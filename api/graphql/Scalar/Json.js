import GraphQLJSON from 'graphql-type-json'

const resolver = {
    JSON: GraphQLJSON
}

export default {
    typeDef: `
        scalar JSON
    `,
    resolver
}