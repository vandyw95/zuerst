import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';

import App from 'MainApp';

import * as serviceWorker from 'serviceWorker';

const Root = () => (
  <Router>
    <App />
  </Router>
);

serviceWorker.register();
ReactDOM.render(<Root />, document.getElementById('root'));
