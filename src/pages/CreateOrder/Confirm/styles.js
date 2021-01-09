import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Button from '~/components/Button';
import Input from '~/components/InputOrder';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 30}px;
`;

export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Time = styled.Text`
  font-family: 'RobotoSlab-Medium';
  margin-top: 4px;
  font-size: 18px;
  color: #505050;
`;

export const SubmitButton = styled(Button)`
  font-family: 'RobotoSlab-Medium';
  align-items: center;
  justify-content: center;

  margin-top: 20px;
`;

export const Form = styled.View`
  margin-top: 80px;
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
