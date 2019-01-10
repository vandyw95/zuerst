import React from 'react';
import styled from 'styled-components';

import { Layout as AntdLayout, Menu as AntdMenu, Icon as AntdIcon } from 'antd';

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled(AntdLayout.Header)`
  padding: unset;
  height: unset;
  line-height: unset;
  @media (max-width: 450px) {
    position: fixed;
    bottom: 0%;
    width: 100%;
    border-top: 1px solid lightgray;
    z-index: 10;
  }
`;

export const Content = styled(AntdLayout.Content)`
  min-height: calc(100vh - 50px);
  @media (max-width: 450px) {
    margin-bottom: 55px;
  }
`;

export const Menu = styled(AntdMenu)`
  height: 50px;
  line-height: 50px;
`;

export const MenuItem = styled(
  ({ isVisibleOnDesktop, isVisibleOnMobile, ...restProps }) => (
    <AntdMenu.Item {...restProps} />
  ),
)`
  height: 100%;
  margin-bottom: 1px;
  @media (max-width: 450px) {
    width: 25%;
  }
  ${({ isVisibleOnDesktop }) =>
    !isVisibleOnDesktop &&
    `
    @media (min-width: 450px) {
      display: none !important;
    }
  `}
  ${({ isVisibleOnMobile }) =>
    !isVisibleOnMobile &&
    `
    @media (max-width: 450px) {
      display: none !important;
    }
  `}
`;

export const MenuIcon = styled(AntdIcon)`
  @media (max-width: 450px) {
    display: table-row;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const MenuTitle = styled.span`
  @media (max-width: 450px) {
    display: table-row;
    line-height: 10px;
  }
`;
