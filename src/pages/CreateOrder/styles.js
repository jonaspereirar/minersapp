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
  font-family: 'RobotoSlab-Regular';
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
  margin-left: auto;
`;

export const TitleAgendar = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
  align-self: center;
  margin-top: 1px;
`;

export const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled.View`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)`
  background: ${props => (props.selected ? '#00ff02' : '#ff9000')}
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

export const ProviderName = styled.Text`
  margin-left: 8px;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: ${props => (props.selected ? '#232129' : '#f4ede8')};
`;

export const TitleChoseDate = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: 24px;
  margin: 0 24px 24px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  height: 46px;
  background: #fde2b3;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const OpenDatePickerButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #232129;
`;

export const BackButton = styled.TouchableOpacity``;

export const Calender = styled.View``;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;

export const Hour = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  opacity: ${props => (props.enabled ? 1 : 0.6)};
  align-items: center;
  margin: 0 10px 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
