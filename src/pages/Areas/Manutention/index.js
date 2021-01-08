import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function Manutention({ route, navigation }) {
  const profile = useSelector(state => state.user.profile);

  const { direction } = route.params;

  const [selectedAreas, setselectedAreas] = useState([]);

  const { navigate } = useNavigation();
  const [areas, setAreas] = useState([]);

  const navigateToProfile = useCallback(() => {
    navigate(signOut());
  }, [navigate]);

  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  useEffect(() => {
    async function loadDirections() {
      const response = await api.get(`direction/${direction}/areas`);

      setAreas(response.data);
    }
    loadDirections();
  }, [selectedAreas, direction]);

  const handleSelectArea = useCallback(
    id => {
      setselectedAreas(id);
      console.tron.log(id);
      navigation.navigate(`${id}`, { area: id });
    },
    [navigation]
  );

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
            <TitleBack onPress={navigateBack}>Direção</TitleBack>
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
            <DirectionContainer
              onPress={() => handleSelectArea(item.id, { area: item.id })}
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

Manutention.propTypes = {
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
