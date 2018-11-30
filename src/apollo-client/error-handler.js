import { message as AntdMessage } from 'antd';

export default ({ location, history, graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    if (graphQLErrors[0].message === 'Not Authorized') {
      AntdMessage.warn('Please login', 2);
      if (location.pathname !== '/login') return history.push('/login');
    } else if (graphQLErrors[0].message.search('was not provided') > -1) {
      const missingVariables = graphQLErrors.map(error => {
        if (error.message.search('was not provided') > -1) {
          return error.message.split('"')[1].slice(1);
        }
      });

      AntdMessage.error(
        `Please check your input! Missing: ${missingVariables.join(', ')}`,
        2,
      );
    }
    graphQLErrors.map(({ message, locations, path }) => {
      return console.log(message, locations, path);
    });
  }

  if (networkError) {
    return console.log('[Network Error]: ', networkError);
  }
};
