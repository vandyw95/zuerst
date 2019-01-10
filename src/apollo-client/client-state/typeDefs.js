const typeDefs = `
  type LoginData {
    email: String!
    token: String!
    __typename: String!
  }

  type Mutation {
    saveLoginData(email: String!, token: String!): LoginData
  }

  type Query {
    loginData: LoginData
  }
`;

export default typeDefs;
