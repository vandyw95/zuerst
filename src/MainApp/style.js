import styled from 'styled-components';

import {
  Layout as AntdLayout,
  Menu as AntdMenu,
  Icon as AntdIcon,
} from 'antd';

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled(AntdLayout.Header)`
  padding: unset;
  height: unset;
  line-height: unset;
`;

export const Content = styled(AntdLayout.Content)`
  min-height: calc(100vh - 50px);
`;

export const Menu = styled(AntdMenu)`
  height: 50px;
  line-height: 50px;
`;

export const MenuItem = styled(AntdMenu.Item)``;

export const MenuIcon = styled(AntdIcon)``;

export const MenuTitle = styled.span``;
