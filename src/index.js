import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import 'antd/dist/antd.css';

import App from './MainApp';
import getApolloClient from './apollo-client';
import * as serviceWorker from './serviceWorker';

const WithRouter = withRouter(routerProps => (
  <ApolloProvider client={getApolloClient(routerProps)}>
    <App />
  </ApolloProvider>
));

const Root = () => (
  <Router>
    <WithRouter />
  </Router>
);

serviceWorker.register();
ReactDOM.render(<Root />, document.getElementById('root'));
