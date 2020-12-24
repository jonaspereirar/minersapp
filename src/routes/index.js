import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

// import SelectProvider from '~/pages/New/SelectProvider';
// import SelectDateTime from '~/pages/New/SelectDateTime';
// import Confirm from '~/pages/New/Confir';

const MainStack = createStackNavigator();

export default (isSigned = false) => () => (
  <NavigationContainer>
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isSigned ? 'App' : 'Sign'}
    >
      <MainStack.Screen name="Sign" component={AuthRoutes} />
      <MainStack.Screen name="App" component={AppRoutes} />
    </MainStack.Navigator>
  </NavigationContainer>
);
