import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { message as AntdMessage } from 'antd';

import AppHeader from './AppHeader';
import AppContent from './AppContent';

import { AppWrapper } from './style';

const CHECK_LOGIN = gql`
  query CheckLogin {
    loginData @client {
      token
    }
  }
`;

export default withRouter(({ location }) => {
  return (
    <Query query={CHECK_LOGIN}>
      {({ data }) => {
        if (!data.loginData.token) {
          AntdMessage.warn('Please login', 2);
          if (location.pathname !== '/login') {
            return <Redirect
              push
              to="/login"
            />;
          }
        }

        return (
          <AppWrapper>
            {location.pathname !== '/login' && <AppHeader />}

            <AppContent />
          </AppWrapper>
        );
      }}
    </Query>
  );
});
