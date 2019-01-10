import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form as AntdForm, message as AntdMessage } from 'antd';

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
    validateFields(async error => {
      if (!error) {
        const { email, password } = getFieldsValue();
        const {
          data: { login },
        } = await doLogin({
          variables: {
            email,
            password,
          },
        });
        const {
          data: {
            saveLoginData: { loginData },
          },
        } = await storeLoginData({
          variables: {
            email,
            token: login.token,
          },
        });
        if (loginData.token) {
          AntdMessage.success('Logged In', 2);
          history.push('/home');
        } else {
          AntdMessage.error('Login error, please try again!');
        }
      }
    });
  }

  return (
    <Form>
      <FormItem>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your email!' }],
        })(
          <UsernameInput
            placeholder="Email"
            prefix={<InputIcon type="user" />}
            type="email"
          />,
        )}
      </FormItem>

      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your password!' }],
        })(
          <PasswordInput
            placeholder="Password"
            prefix={<InputIcon type="lock" />}
            type="password"
          />,
        )}
      </FormItem>

      <LoginButton
        type="primary"
        onClick={() => {
          handleLogin();
        }}
      >
        {'Login'}
      </LoginButton>
    </Form>
  );
}

export default AntdForm.create()(withRouter(LoginForm));
