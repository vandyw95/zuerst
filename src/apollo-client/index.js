import ApolloClient from 'apollo-boost';
import errorHandler from './error-handler';

export default history => {
  return new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URL,
    onError: error => errorHandler({ history, ...error }),
  });
};
