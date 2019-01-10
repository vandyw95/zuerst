import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CHECK_LOGIN = gql`
  query CheckLogin {
    loginData @client {
      email
      token
    }
  }
`;

function withLoginData(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <Query query={CHECK_LOGIN}>
          {({ data: { loginData } }) => <WrappedComponent loginData={loginData} />}
        </Query>
      );
    }
  };
}

export default withLoginData;
