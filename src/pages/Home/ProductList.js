import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
  query GetProducts {
    allProducts {
      id
      price
      name
    }
  }
`;

export default () => {
  return (
    <Query query={GET_PRODUCTS}>
      {({ loading, error, data }) => {
        return <span>Hello</span>;
      }}
    </Query>
  );
};
