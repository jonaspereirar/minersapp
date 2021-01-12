import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  padding: 0 24px;

  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin-top: 48px;
  text-align: center;
`;

export const Time = styled.Text`
  font-family: 'RobotoSlab-Medium';
  margin-top: 4px;
  font-size: 18px;
  color: #505050;
`;

export const Description = styled.Text`
  font-family: "RobotoSlab-Regular";
  font-size: 18px
  color: #04d361;
  margin-top: 16px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;
