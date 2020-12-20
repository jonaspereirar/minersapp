import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#FF4000" />
    <View style={{ flex: 1, backgroundColor: '#FF4000' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
