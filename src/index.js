import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import Background from '~/components/Background';

const App = () => (
  <NavigationContainer>
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#ff9000" />
      <Routes />
    </Background>
  </NavigationContainer>
);

export default App;
