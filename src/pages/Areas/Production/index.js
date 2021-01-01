import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

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
} from './styles';

import Background from '~/components/Background';
import { signOut } from '~/store/modules/auth/actions';

// import logo from '../../assets/logo.png';

import api from '~/services/api';

export default function Production() {
  const profile = useSelector(state => state.user.profile);
  const { navigate } = useNavigation();

  const [areas, setAreas] = useState([]);

  const navigateToProfile = useCallback(() => {
    navigate(signOut());
  }, [navigate]);

  useEffect(() => {
    async function loadDirections() {
      const response = await api.get('areas/production');

      setAreas(response.data);
    }
    loadDirections();
  }, []);

  const navigateToAreas = id => {
    switch (id) {
      case 1: {
        navigate('Production');
        break;
      }
      case 2: {
        navigate('Manutention');
        break;
      }
      default:
    }
  };

  console.tron.log(areas);

  return (
    <Container>
      <Background>
        <Header>
          <HeaderTitle>
            <UserName>{profile.name}</UserName>
            {'\n'}
            Selecione a area{'\n'}Select the order area
          </HeaderTitle>

          <ProfileButton onPress={navigateToProfile}>
            <UserAvatar source={{ uri: profile.avatar.url }} />
          </ProfileButton>
        </Header>

        <FlatList
          data={areas}
          keyExtractor={item => String(item.id)}
          ListHeaderComponent={
            <TitleDirectionList>Area list</TitleDirectionList>
          }
          renderItem={({ item }) => (
            <DirectionContainer onPress={() => navigateToAreas(item.id)}>
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
