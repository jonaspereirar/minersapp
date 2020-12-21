import React from 'react';
import { Image, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

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

const SignIn = ({ navigation }) => (
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
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Digite sua senha"
            returnKeyType="send"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
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

SignIn.propTypes = {
  navigation: PropTypes.shape({ replace: PropTypes.func }).isRequired,
};

export default SignIn;
