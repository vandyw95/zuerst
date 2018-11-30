const typeDefs = `
  type LoginData {
    token: String!
    __typename: String!
  }

  type Mutation {
    saveLoginData(token: String!): LoginData
  }

  type Query {
    loginData: LoginData
  }
`;

export default typeDefs;
