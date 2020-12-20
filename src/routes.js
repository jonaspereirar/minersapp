import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import User from './pages/User';
import Main from './pages/Main';

const { Navigator, Screen } = createStackNavigator();

const routes = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="User" component={User} />
      <Screen name="Main" component={Main} />
    </Navigator>
  </NavigationContainer>
);

export default routes;
