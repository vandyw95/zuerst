import React from 'react';

import ProductList from './ProductList';

import { HomePageWrapper, ProductListWrapper } from './style';

export default () => {
  return (
    <HomePageWrapper>
      <ProductListWrapper>
        <ProductList />
      </ProductListWrapper>
    </HomePageWrapper>
  );
};
