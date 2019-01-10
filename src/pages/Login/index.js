import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import LoginForm from './Form';

import { PageWrapper } from './style';

const DO_LOGIN = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const STORE_LOGIN_DATA = gql`
  mutation SaveLoginData($email: String!, $token: String!) {
    saveLoginData(email: $email, token: $token) @client
  }
`;

function LoginPage() {
  return (
    <PageWrapper>
      <Mutation mutation={DO_LOGIN}>
        {doLogin => (
          <Mutation mutation={STORE_LOGIN_DATA}>
            {storeLoginData => (
              <LoginForm
                doLogin={doLogin}
                storeLoginData={storeLoginData}
              />
            )}
          </Mutation>
        )}
      </Mutation>
    </PageWrapper>
  );
}

export default LoginPage;
