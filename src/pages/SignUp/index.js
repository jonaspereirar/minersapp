import React from 'react';
import { Image, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import logo from '../../assets/logo.png';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  BackToSignIn,
  BackToSignInText,
} from './styles';

const SignUp = ({ navigation }) => (
  <ScrollView
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={{ flex: 1 }}
  >
    <Background>
      <Container>
        <Image source={logo} />

        <View>
          <Title>Faça seu Registo</Title>
        </View>

        <Form>
          <FormInput
            icon="person"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome completo"
            returnKeyType="next"
          />

          <FormInput
            icon="engineering"
            keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nº de funcionário"
            returnKeyType="next"
          />

          <FormInput
            icon="mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
          />

          <FormInput
            icon="lock"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Digite sua senha"
            returnKeyType="send"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <BackToSignIn onPress={() => navigation.replace('SignIn')}>
          <Icon name="arrow-back" size={20} color="#f4ede8" />
          <BackToSignInText>Voltar para login</BackToSignInText>
        </BackToSignIn>
      </Container>
    </Background>
  </ScrollView>
);

SignUp.propTypes = {
  navigation: PropTypes.shape({ replace: PropTypes.func }).isRequired,
};

export default SignUp;
