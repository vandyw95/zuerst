import React from 'react';

import {
  PageWrapper,
  Form,
  FormItem,
  InputIcon,
  UsernameInput,
  PasswordInput,
  LoginButton,
} from './style';

const LoginForm = ({ form, loginUser }) => {
  const { getFieldDecorator } = form;
  const handleLogin = () => console.log('Login Success');
  return (
    <PageWrapper>
      <Form>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<UsernameInput prefix={<InputIcon type="user" />} placeholder="Username" />)}
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

        <LoginButton type="primary" onClick={handleLogin}>
          {'Login'}
        </LoginButton>
      </Form>
    </PageWrapper>
  );
};

export default LoginForm;
