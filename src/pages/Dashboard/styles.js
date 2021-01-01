import styled from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 0.1}px;
  background: transparent;
  border: 2px solid #ff9000;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const UserName = styled.Text`
  color: #28262e;
  font-family: 'RobotoSlab-Medium';
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  padding: 24px;
  width: 80px;
  height: 80px;
  border-radius: 28px;
`;

export const DirectionButton = styled.TouchableOpacity``;
export const DirectionTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  position: absolute;
  margin-left: 130px;
  margin-top: 60px;
  color: #f4ede8;
  font-size: 16px;
`;
export const DirectionAvatar = styled.Image`
  padding: 80px 0 ${16 + getBottomSpace()}px;
  margin-top: 54px;
  margin-left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export const CheklistButton = styled.TouchableOpacity``;
export const ChecklistTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  position: absolute;
  margin-left: 130px;
  margin-top: 60px;
  color: #f4ede8;
  font-size: 16px;
`;
export const ChecklistAvatar = styled.Image`
  padding: 80px 0 ${16 + getBottomSpace()}px;
  margin-top: 56px;
  margin-left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export const LookButton = styled.TouchableOpacity``;
export const LookTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  position: absolute;
  margin-left: 130px;
  margin-top: 60px;
  color: #f4ede8;
  font-size: 16px;
`;
export const LookAvatar = styled.Image`
  padding: 80px 0 ${16 + getBottomSpace()}px;
  margin-top: 56px;
  margin-left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 300px;
  background: #f64c75;
`;
