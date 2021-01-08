import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

const Confirm = ({ route, navigation }) => {
  const { provider, time, area } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  console.tron.log({ provider });
  async function handleAddAppointment() {
    await api.post('orders', {
      provider_id: provider.id,
      date: time,
      area_id: area,
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

        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={handleAddAppointment}>
          Confirmar agendamento
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
