const resolvers = {
  Mutation: {
    saveLoginData: (_, variables, b) => {
      console.log({ _, variables, b });
      return null;
    },
  },
};

export default resolvers;
