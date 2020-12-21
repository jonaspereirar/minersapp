import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'android',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  margin-top: 5px;
`;
export const Title = styled.Text`
  font-size: 18px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 50px 0 5px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #ff1000;
  border-top-width: 1px;
  border-color: #f4ede8;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SignLinkText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-weight: bold;
  font-size: 16px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #f4ede8;
  font-weight: bold;
  font-size: 14px;
`;
