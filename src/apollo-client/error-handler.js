import { message as AntdMessage } from 'antd';

export default ({ location, history, graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    if (graphQLErrors[0].message === 'Not Authorized') {
      AntdMessage.warn('Please login', 2);
      if (location.pathname !== '/login') return history.push('/login');
    }
    graphQLErrors.map(({ message, locations, path }) => {
      return console.log(message, locations, path);
    });
  }

  if (networkError) {
    return console.log('[Network Error]: ', networkError);
  }
};
