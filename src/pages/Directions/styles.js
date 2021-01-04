import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

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
  font-family: 'RobotoSlab-Regula            <TitleDirectionList>Direction list</TitleDirectionList>r';
  line-height: 28px;
`;

export const TitleBack = styled.Text`
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
export const TitleDirectionList = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
  align-self: center;
  margin-top: 1px;
`;

export const DirectionContainer = styled(RectButton)`
  background: transparent;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
`;

export const DirectionAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const DirectionInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const DirectionName = styled.Text`
  position: absolute;
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
`;

export const BackButton = styled.TouchableOpacity``;
