import ApolloClient from 'apollo-boost';

import clientState from './client-state';
import errorHandler from './error-handler';

export default routerProps => {
  return new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URL,
    clientState,
    onError: error => errorHandler({ ...routerProps, ...error }),
  });
};
