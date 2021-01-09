import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { TouchableOpacity } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Form } from '@unform/mobile';
import api from '~/services/api';

import Background from '~/components/Background';

import {
  Container,
  Avatar,
  Name,
  Time,
  SubmitButton,
  FormInput,
} from './styles';

const Confirm = ({ route, navigation }) => {
  const descriptionRef = useRef();
  const frenteRef = useRef();
  const locationRef = useRef();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [front, setFront] = useState('');
  const [location, setLocation] = useState([]);

  const profile = useSelector(state => state.user.profile);
  const { provider, time, area } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  useEffect(() => {
    async function loadLocations() {
      const response = await api.get('locations');

      setLocation(response.data);
    }
    loadLocations();
  }, []);

  async function handleAddAppointment() {
    await api.post('orders', {
      title,
      description,
      location: location.id,
      area_id: area,
      date: time,
      provider_id: provider.id,
      user_id: profile.id,
      front,
    });

    navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] });
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://ui-avatars.com/api/?name=${provider.name[0]}`,
          }}
        />
        <Form>
          <Name>{provider.name}</Name>
          <Time>{dateFormatted}</Time>
          <FormInput
            icon="title"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Título"
            returnKeyType="next"
            onSubmitEditing={() => descriptionRef.current.focus()}
            value={title}
            onChangeText={setTitle}
          />

          <FormInput
            icon="subtitles"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Descrição"
            ref={descriptionRef}
            returnKeyType="next"
            onSubmitEditing={() => frenteRef.current.focus()}
            value={description}
            onChangeText={setDescription}
          />

          <FormInput
            icon="my-location"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Frente de trabalho"
            ref={frenteRef}
            returnKeyType="next"
            onSubmitEditing={() => locationRef.current.focus()}
            value={front}
            onChangeText={setFront}
          />

          <FormInput
            icon="location-on"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Localização"
            ref={locationRef}
            returnKeyType="send"
            value={location}
            onChangeText={setLocation}
          />
        </Form>
        <SubmitButton onPress={handleAddAppointment}>
          Confirmar pedido
        </SubmitButton>
      </Container>
    </Background>
  );
};

Confirm.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      area: PropTypes.shape({
        id: PropTypes.number,
      }),
      provider: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
        avatar: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
      time: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    reset: PropTypes.func,
  }).isRequired,
};

export default Confirm;
