import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  LogoutButton,
} from './styles';

import { signOut } from '~/store/modules/auth/actions';

import Background from '~/components/Background';

export default function Dashboard() {
  const profile = useSelector(state => state.user.profile);
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }
  console.tron.log(profile);

  return (
    <Container>
      <Background>
        <Header>
          <HeaderTitle>
            Bem vindo, {'\n'}
            <UserName>{profile.name}</UserName>
          </HeaderTitle>

          <ProfileButton onPress={navigateToProfile}>
            <UserAvatar source={{ uri: profile.avatar.url }} />
          </ProfileButton>
        </Header>

        <LogoutButton onPress={handleLogout}>Sair do GoBarber</LogoutButton>
      </Background>
    </Container>
  );
}
