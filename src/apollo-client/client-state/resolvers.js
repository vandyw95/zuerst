const resolvers = {
  Mutation: {
    saveLoginData: (_, { email, token }, { cache }) => {
      const newLoginData = {
        loginData: {
          email,
          token,
          __typename: 'LoginData',
        },
      };
      cache.writeData({ data: newLoginData });
      return newLoginData;
    },
  },
};

export default resolvers;
