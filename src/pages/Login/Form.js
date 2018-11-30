import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Form,
  FormItem,
  InputIcon,
  UsernameInput,
  PasswordInput,
  LoginButton,
} from './style';

function LoginForm({ form, doLogin, storeLoginData, history }) {
  const { getFieldDecorator, getFieldsValue, validateFields } = form;

  function handleLogin() {
    validateFields(error => {
      if (!error) {
        const { email, password } = getFieldsValue();
        doLogin({
          variables: {
            email,
            password,
          },
        }).then(({ data }) => {
          storeLoginData({
            variables: {
              email,
              password,
              token: data.login.token,
            },
          });
          history.push('/home');
        });
      }

      return null;
    });
  }

  return (
    <Form>
      <FormItem>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your email!' }],
        })(
          <UsernameInput
            prefix={<InputIcon type="user" />}
            type="email"
            placeholder="Email"
          />,
        )}
      </FormItem>

      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your password!' }],
        })(
          <PasswordInput
            prefix={<InputIcon type="lock" />}
            type="password"
            placeholder="Password"
          />,
        )}
      </FormItem>

      <LoginButton type="primary" onClick={() => handleLogin()}>
        {'Login'}
      </LoginButton>
    </Form>
  );
}

export default withRouter(LoginForm);
