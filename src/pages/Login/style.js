import styled from 'styled-components';

import {
  Form as AntdForm,
  Icon as AntdIcon,
  Input as AntdInput,
  Button as AntdButton,
} from 'antd';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Form = styled(AntdForm)`
  width: 250px;
  padding: 25px;
  position: relative;
  left: calc(50% - 125px);
  top: calc(50% - 105px);
  border: 1px solid lightgrey;
  border-radius: 6px;
  text-align: center;
  @media (min-width: 450px) {
    top: calc(30% - 105px);
  }
`;

export const FormItem = styled(AntdForm.Item)``;
export const InputIcon = styled(AntdIcon)``;
export const UsernameInput = styled(AntdInput)``;
export const PasswordInput = styled(AntdInput)``;
export const LoginButton = styled(AntdButton)``;
