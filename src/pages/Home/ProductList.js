import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ProductCard from './ProductCard';

const GET_PRODUCTS = gql`
  query GetProducts {
    allProducts {
      id
      price
      name
    }
  }
`;

const LOADING_ITEMS = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];

function ProductList() {
  return (
    <Query query={GET_PRODUCTS}>
      {({ loading, error, data }) => {
        const hasDataLoaded = !loading && data.allProducts;
        const itemsToRender = hasDataLoaded ? data.allProducts : LOADING_ITEMS;

        if (error) return null;

        return itemsToRender.map(item => (
          <ProductCard
            data={item}
            key={item.id}
            loading={loading}
          />
        ));
      }}
    </Query>
  );
}

export default ProductList;
