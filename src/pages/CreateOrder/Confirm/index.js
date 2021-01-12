import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  BackButton,
} from './styles';

const Confirm = ({ route, navigation }) => {
  // const { navigate } = useNavigation();
  const descriptionRef = useRef();
  const frenteRef = useRef();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [front, setFront] = useState('');
  const [location, setLocation] = useState([]);
  const [cursosSelected, setCursosSelected] = useState([]);

  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

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
      location_id: location.id,
      area_id: area,
      date: time,
      provider_id: provider.id,
      user_id: profile.id,
      front,
    });

    navigation.navigate('OrderCreated', { time, provider, location });
  }

  return (
    <Background>
      <Container>
        <BackButton onPress={navigateBack}>
          <Icon name="arrow-back" size={24} color="#f4ede8" />
        </BackButton>
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
            value={front}
            onChangeText={setFront}
          />

          <View
            style={{
              height: 60,
              borderWidth: 2,
              borderColor: '#666360',
              borderRadius: 8,
              fontFamily: 'RobotoSlab-Regular',

              backgroundColor: '#e54000',
            }}
          >
            <Picker
              style={{
                fontSize: 16,
                color: '#fff',
                placeholderTextColor: '#fff',
                left: 40,
              }}
              mode="dialog"
              dropdownIconColor="grey"
              selectedValue={cursosSelected}
              onValueChange={itemValue => setCursosSelected(itemValue)}
            >
              {location.map(local => (
                <Picker.Item label={`${local.name}`} value={`${local.id}`} />
              ))}
            </Picker>
            <Icon
              name="location-pin"
              size={20}
              color="rgba(255, 255, 255, 0.6)"
              style={[{ right: 290, top: 15, position: 'absolute' }]}
            />
          </View>
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
    navigate: PropTypes.func,
  }).isRequired,
};

export default Confirm;
