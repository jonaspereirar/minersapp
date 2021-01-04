import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
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
  Provider,
  Avatar,
  DirectionInfo,
  DirectionName,
  BackButton,
  TitleBack,
} from './styles';

import Background from '~/components/Background';
import { signOut } from '~/store/modules/auth/actions';

// import logo from '../../assets/logo.png';

import api from '~/services/api';

export default function Mechanics({ navigation }) {
  const { navigate } = useNavigation();
  const profile = useSelector(state => state.user.profile);
  const [providers, setproviders] = useState([]);

  const navigateToProfile = useCallback(() => {
    navigate(signOut());
  }, [navigate]);

  const { goBack } = useNavigation();
  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers/mechanics');

      setproviders(response.data);
    }
    loadProviders();
  }, []);

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
            <TitleBack onPress={navigateBack}>Áreas</TitleBack>
          </HeaderTitle>

          <ProfileButton onPress={navigateToProfile}>
            <UserAvatar source={{ uri: profile.avatar.url }} />
          </ProfileButton>
        </Header>

        <FlatList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          ListHeaderComponent={
            <TitleDirectionList>Supervisor list</TitleDirectionList>
          }
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() => navigation.navigate('CreateOrder', { provider })}
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : 'https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png',
                }}
              />
              <DirectionInfo>
                <DirectionName>{provider.name}</DirectionName>
              </DirectionInfo>
            </Provider>
          )}
        />
      </Background>
    </Container>
  );
}

Mechanics.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
