import React from 'react';

import { Card, CardMeta, Skeleton } from './style';

function ProductCard({ loading, data: { price, name } }) {
  return (
    <Card hoverable>
      <Skeleton
        active
        avatar
        loading={loading}
        paragraph={{ rows: 2, width: [150, 50] }}
        title={false}
      >
        {!loading && (
          <CardMeta
            description={price}
            title={name}
          />
        )}
      </Skeleton>
    </Card>
  );
}

export default ProductCard;
