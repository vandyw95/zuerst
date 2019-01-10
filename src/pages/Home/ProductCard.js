import React from 'react';

import { Card, CardMeta, Skeleton } from './style';

function ProductCard({ loading, data }) {
  return (
    <Card hoverable>
      <Skeleton
        active
        avatar
        loading={loading}
        paragraph={{ rows: 2, width: [150, 50] }}
        title={false}>
        {!loading && <CardMeta
          description={data.price}
          title={data.name}
        />}
      </Skeleton>
    </Card>
  );
}

export default ProductCard;
