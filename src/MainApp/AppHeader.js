import React from 'react';
import { withRouter } from 'react-router-dom';

import { Header, Menu, MenuItem, MenuIcon, MenuTitle } from './style';

const MENU_LIST = [
  { id: 'home', icon: 'home', label: 'Home', path: '/home' },
  { id: 'hot', icon: 'fire', label: 'Hot', path: '/hot' },
  { id: 'profile', icon: 'user', label: 'Profile', path: '/profile' },
  { id: 'more', icon: 'ellipsis', label: 'More', path: '/more' },
];

export default withRouter(({ history }) => (
  <Header>
    <Menu
      defaultSelectedKeys={['home']}
      mode="horizontal">
      {MENU_LIST.map(({ id, path, icon, label }, index) => (
        <MenuItem
          key={id}
          isVisibleOnDesktop={id !== 'more'}
          isVisibleOnMobile={index < 4}
          onClick={() => history.push(path)}>
          <MenuIcon type={icon} />
          <MenuTitle>{label}</MenuTitle>
        </MenuItem>
      ))}
    </Menu>
  </Header>
));
