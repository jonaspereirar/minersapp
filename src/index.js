import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import Routes from './routes';
import Background from '~/components/Background';

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Background>
          <StatusBar barStyle="light-content" backgroundColor="#ff9000" />
          <Routes />
        </Background>
      </PersistGate>
    </Provider>
  </NavigationContainer>
);

export default App;
