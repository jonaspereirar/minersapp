import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  HeaderTitle,
  UserAvatar,
  ProfileButton,
  BackButton,
} from './styles';

import Background from '~/components/Background';

export default function OrderCreated() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Background>
        <Header>
          <BackButton onPress={() => {}}>
            <Icon namw="chevron-left" size={24} color="#999591" />
          </BackButton>

          <HeaderTitle>Supervisor</HeaderTitle>

          <ProfileButton onPress={() => {}}>
            <UserAvatar source={{ uri: profile.avatar.url }} />
          </ProfileButton>
        </Header>
      </Background>
    </Container>
  );
}
