import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  DirectionButton,
  DirectionAvatar,
  DirectionTitle,
  CheklistButton,
  ChecklistAvatar,
  ChecklistTitle,
  LookButton,
  LookAvatar,
  LookTitle,
  LogoutButton,
} from './styles';

import { signOut } from '~/store/modules/auth/actions';

import Background from '~/components/Background';
import logoscheduler from '../../assets/calendar.png';
import logochecklist from '../../assets/checklist.png';
import logolook from '../../assets/look.png';

export default function Dashboard() {
  const profile = useSelector(state => state.user.profile);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const navigateToProfile = useCallback(() => {
    navigate(signOut());
  }, [navigate]);

  const navigateToDirections = useCallback(() => {
    navigate('Directions');
  }, [navigate]);

  const navigateToChecklist = useCallback(() => {
    navigate('Checklist');
  }, [navigate]);

  const navigateToLook = useCallback(() => {
    navigate('Look');
  }, [navigate]);

  function handleLogout() {
    dispatch(signOut());
  }
  console.tron.log(profile);

  return (
    <Container>
      <Background>
        <Header>
          <HeaderTitle>
            Bem vindo, Welcome,{'\n'}
            <UserName>{profile.name}</UserName>
          </HeaderTitle>

          <ProfileButton onPress={navigateToProfile}>
            <UserAvatar source={{ uri: profile.avatar.url }} />
          </ProfileButton>
        </Header>

        <DirectionButton onPress={navigateToDirections}>
          <DirectionAvatar source={logoscheduler} />
          <DirectionTitle>Plan an order:{'\n'}Agendar serviço.</DirectionTitle>
        </DirectionButton>

        <CheklistButton onPress={navigateToChecklist}>
          <ChecklistAvatar source={logochecklist} />
          <ChecklistTitle>
            Checklists:{'\n'}Viaturas, Maquinas,{'\n'}Locais de Instalação.
          </ChecklistTitle>
        </CheklistButton>

        <LookButton onPress={navigateToLook}>
          <LookAvatar source={logolook} />
          <LookTitle>Search:{'\n'}Pesquisar.</LookTitle>
        </LookButton>

        <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
      </Background>
    </Container>
  );
}
