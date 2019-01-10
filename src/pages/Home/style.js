import styled from 'styled-components';
import { Card as AntdCard, Skeleton as AntdSkeleton } from 'antd';

export const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  @media (min-width: 450px) {
    padding: 5px 15%;
  }
`;

export const ProductListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled(AntdCard)`
  width: 100%;
  height: 80px;
  margin: 5px;
  border-radius: 10px;
  &div,
  .ant-card-body {
    padding: 17px;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 450px) {
    width: calc(33.33% - 10px);
    height: 100px;
    &div,
    .ant-card-body {
      padding: 24px;
    }
  }
`;

export const CardMeta = styled(AntdCard.Meta)``;

export const Skeleton = styled(AntdSkeleton)`
  &div,
  .ant-skeleton-header {
    padding-right: 0px;
  }
  &ul,
  .ant-skeleton-paragraph {
    padding-left: 25px;
    & > li + li {
      margin-top: 9px;
    }
  }
`;
