import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/components/Background';

import {
  Container,
  Name,
  Time,
  SubmitButton,
  Title,
  Description,
} from './styles';

const OrderCreated = ({ route, navigation }) => {
  const { provider, time } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function handleAddAppointment() {
    navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] });
  }
  return (
    <Background>
      <Container>
        <Icon name="check-circle-outline" size={80} color="#04d361" />
        <Title>Agendamento concluído</Title>
        <Time>{dateFormatted}</Time>
        <Description>Obrigado</Description>
        <Name>
          {provider.name}
          {'\n'}entrará em contacto com você!
        </Name>

        <SubmitButton onPress={handleAddAppointment}>OK</SubmitButton>
      </Container>
    </Background>
  );
};

OrderCreated.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      provider: PropTypes.shape({
        avatar: PropTypes.shape({
          url: PropTypes.string,
        }),
        name: PropTypes.string,
        id: PropTypes.number,
      }),
      time: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    reset: PropTypes.func,
  }).isRequired,
};

export default OrderCreated;
