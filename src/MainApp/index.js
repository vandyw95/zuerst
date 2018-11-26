import React from 'react';
import { withRouter } from 'react-router-dom';

import AppHeader from './AppHeader';
import AppContent from './AppContent';

import { AppWrapper } from './style';

export default withRouter(({ location }) => {
  return (
    <AppWrapper>
      {location.pathname !== '/login' && <AppHeader />}

      <AppContent />
    </AppWrapper>
  );
});
