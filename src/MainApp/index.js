import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { message as AntdMessage } from 'antd';

import withLoginData from './withLoginData';

import AppHeader from './AppHeader';
import AppContent from './AppContent';

import { AppWrapper } from './style';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loginData: {
        email: '',
        token: '',
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.isLoggedIn && nextProps.loginData.token) {
      this.setState({
        isLoggedIn: true,
        loginData: nextProps.loginData,
      });
    }
  }

  componentDidMount() {
    if (!this.state.isLoggedIn) {
      AntdMessage.warn('Please login', 2);
      if (this.props.location.pathname !== '/login') {
        this.props.history.push('/login');
      }
    }
  }

  render() {
    const { location } = this.props;
    const { loginData } = this.state;

    return (
      <AppWrapper>
        {location.pathname !== '/login' && <AppHeader />}

        <AppContent loginData={loginData} />
      </AppWrapper>
    );
  }
}

export default withLoginData(withRouter(MainApp));
