import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { HomePageWrapper } from './style';

const GET_ME = gql`
  {
    me {
      id
    }
  }
`;

export default () => (
  <HomePageWrapper>
    {'Hello World!'}

    <Query query={GET_ME}>
      {({ loading, error, data }) => {
        return null;
      }}
    </Query>
  </HomePageWrapper>
);
