import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  padding: 0 16px;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid #666360;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  color: #fff;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(MaterialIcons)`
  margin-right: 16px;
`;
