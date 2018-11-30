import gql from 'graphql-tag';

export const GET_LOGIN_DATA = gql`
  query GetLoginData {
    loginData {
      token
    }
  }
`;
