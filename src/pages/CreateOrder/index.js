import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  UserAvatar,
  ProfileButton,
  BackButton,
  TitleBack,
  ProviderAvatar,
  ProvidersList,
  ProvidersListContainer,
  ProviderContainer,
  ProviderName,
  TitleChoseDate,
  HourList,
  Hour,
  Title,
} from './styles';

import Background from '~/components/Background';
import api from '~/services/api';
import DateInput from '~/components/DateInput';
import { signOut } from '~/store/modules/auth/actions';

export default function CreatedOrder({ navigation, route }) {
  const { navigate } = useNavigation();
  const profile = useSelector(state => state.user.profile);
  const { provider, area } = route.params;
  const { goBack } = useNavigation();

  const [providers, setproviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(provider.id);
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const navigateToProfile = useCallback(() => {
    navigate(signOut());
  }, [navigate]);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(
        `providers/${selectedProvider}/available`,
        {
          params: { date: date.getTime() },
        }
      );

      setHours(response.data);
    }

    loadAvailable();
  }, [date, selectedProvider]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get(`area/${area}/providers`);

      setproviders(response.data);
    }
    loadProviders();
  }, [area, provider]);

  const handleSelectProvider = useCallback(id => {
    setSelectedProvider(id);
  }, []);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', { provider, time, area });
  }

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

        <ProvidersListContainer>
          <ProvidersList>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={providers}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <ProviderContainer
                  onPress={() => handleSelectProvider(item.id)}
                  selected={item.id === selectedProvider}
                >
                  <ProviderAvatar
                    source={{
                      uri: item.avatar
                        ? item.avatar.url
                        : 'https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png',
                    }}
                  />
                  <ProviderName selected={item.id === selectedProvider}>
                    {item.name}
                  </ProviderName>
                </ProviderContainer>
              )}
            />
          </ProvidersList>
        </ProvidersListContainer>

        <TitleChoseDate>Escolha a data</TitleChoseDate>
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <Hour
              enabled={item.available}
              onPress={() => {
                handleSelectHour(item.value, {
                  area: area.id,
                  provider: provider.id,
                });
              }}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Background>
    </Container>
  );
}

CreatedOrder.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      area: PropTypes.shape({
        id: PropTypes.number,
      }),
      provider: PropTypes.shape({
        id: PropTypes.number,
      }),
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
