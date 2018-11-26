import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Header,
  Menu,
  MenuItem,
  MenuIcon,
  MenuTitle,
} from './style';

const MENU_LIST = [
  { id: 'home', icon: 'home', label: 'Home', path: '/home' },
  { id: 'about', icon: 'bulb', label: 'About', path: '/about' },
];

export default withRouter(({ history }) => (
  <Header>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['home']}
    >
      {MENU_LIST.map(item => (
        <MenuItem
          key={item.id}
          onClick={() => history.push(item.path)}
        >
          <MenuIcon type={item.icon} />
          <MenuTitle>{item.label}</MenuTitle>
        </MenuItem>
      ))}
    </Menu>
  </Header>
));
