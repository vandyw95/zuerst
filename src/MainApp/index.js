import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import AppHeader from './AppHeader';
import AppContent from './AppContent';

import { AppWrapper } from './style';

const CHECK_LOGIN = gql`
  query CheckLogin {
    me {
      id
    }
  }
`;

export default withRouter(({ location }) => {
  return (
    <Query query={CHECK_LOGIN}>
      {({ loading, error }) => {
        if (loading) return <span>Please Wait...</span>;
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
