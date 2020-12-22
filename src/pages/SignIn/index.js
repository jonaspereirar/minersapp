import React, { useRef, useState } from 'react';
import { Image, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import logo from '../../assets/logo.png';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  ForgotPassword,
  ForgotPasswordText,
} from './styles';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(number, password));
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Background>
        <Container>
          <Image source={logo} />

          <View>
            <Title>Faça seu login</Title>
          </View>

          <Form>
            <FormInput
              icon="engineering"
              keyboardType="numeric"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nº de Funcioário"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={number}
              onChangeText={setNumber}
            />

            <FormInput
              icon="lock"
              secureTextEntry
              autoCapitalize="none"
              placeholder="Digite sua senha"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />
            <SubmitButton onPress={handleSubmit} loading={loading}>
              Acessar
            </SubmitButton>
          </Form>

          <ForgotPassword onPress={() => {}}>
            <ForgotPasswordText>Recuperar senha</ForgotPasswordText>
          </ForgotPassword>
          <SignLink onPress={() => navigation.replace('SignUp')}>
            <Icon name="login" size={20} color="#f4ede8" />
            <SignLinkText>Criar conta</SignLinkText>
          </SignLink>
        </Container>
      </Background>
    </ScrollView>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.shape({ replace: PropTypes.func }).isRequired,
};

export default SignIn;
