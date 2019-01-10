import React from 'react';

import Routes from './../Routes';

import { Content } from './style';

export default props => (
  <Content>
    <Routes {...props} />
  </Content>
);
