import React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { Form as AntdForm } from 'antd';
import gql from 'graphql-tag';

import LoginForm from './Form';

const POST_LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const LoginContainer = props => {
  return (
    <Mutation mutation={POST_LOGIN_USER}>
      {loginUser => {
        return <LoginForm loginUser={loginUser} {...props} />;
      }}
    </Mutation>
  );
};

export default withRouter(AntdForm.create()(LoginContainer));
