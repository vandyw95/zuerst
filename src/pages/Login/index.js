import React from 'react';
import { Mutation } from 'react-apollo';
import { Form as AntdForm } from 'antd';
import gql from 'graphql-tag';

import LoginForm from './Form';

import { PageWrapper } from './style';

const STORE_LOGIN_DATA = gql`
  mutation Login($token: String!) {
    saveLoginData(token: $token) {
      token
    }
  }
`;

const DO_LOGIN = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

function LoginContainer(props) {
  return (
    <PageWrapper>
      <Mutation mutation={DO_LOGIN}>
        {doLogin => {
          return (
            <Mutation mutation={STORE_LOGIN_DATA}>
              {storeLoginData => {
                return (
                  <LoginForm
                    doLogin={doLogin}
                    storeLoginData={storeLoginData}
                    {...props}
                  />
                );
              }}
            </Mutation>
          );
        }}
      </Mutation>
    </PageWrapper>
  );
}

export default AntdForm.create()(LoginContainer);
