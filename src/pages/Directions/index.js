import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  UserAvatar,
  ProfileButton,
  TitleDirectionList,
  DirectionContainer,
  DirectionAvatar,
  DirectionInfo,
  DirectionName,
  BackButton,
  TitleBack,
} from './styles';

import Background from '~/components/Background';
import { signOut } from '~/store/modules/auth/actions';

// import logo from '../../assets/logo.png';

import api from '~/services/api';

export default function Directions({ navigation }) {
  const profile = useSelector(state => state.user.profile);
  const { navigate } = useNavigation();

  const [directions, setDirections] = useState([]);

  const { goBack } = useNavigation();
  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const navigateToProfile = useCallback(() => {
    navigate(signOut());
  }, [navigate]);

  useEffect(() => {
    async function loadDirections() {
      const response = await api.get('directions');

      setDirections(response.data);
    }
    loadDirections();
  }, []);

  const navigateToAreas = id => {
    switch (id) {
      case 1: {
        navigation.navigate('Production', { direction: id });
        break;
      }
      case 2: {
        navigation.navigate('Manutention', { direction: id });
        break;
      }
      default:
    }
    console.tron.log(id);
  };

  return (
    <Container>
      <Background>
        <Header>
          <HeaderTitle>
            <UserName>{profile.name}</UserName>
            {'\n'}
            {'\n'}
            <BackButton onPress={navigateBack}>
              <Icon name="arrow-back" size={24} color="#f4ede8" />
            </BackButton>
            <TitleBack onPress={navigateBack}>Início</TitleBack>
          </HeaderTitle>

          <ProfileButton onPress={navigateToProfile}>
            <UserAvatar source={{ uri: profile.avatar.url }} />
          </ProfileButton>
        </Header>

        <FlatList
          data={directions}
          keyExtractor={item => String(item.id)}
          ListHeaderComponent={
            <TitleDirectionList>Direction list</TitleDirectionList>
          }
          renderItem={({ item }) => (
            <DirectionContainer
              onPress={() => navigateToAreas(item.id, { direction: item.id })}
            >
              <DirectionAvatar
                source={{
                  uri: item.avatar
                    ? item.avatar.url
                    : 'https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png',
                }}
              />
              <DirectionInfo>
                <DirectionName>{item.name}</DirectionName>
              </DirectionInfo>
            </DirectionContainer>
          )}
        />
      </Background>
    </Container>
  );
}

Directions.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      direction: PropTypes.shape({
        id: PropTypes.number,
      }),
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
