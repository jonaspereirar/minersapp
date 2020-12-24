import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import CreateOrder from '../pages/CreateOrder';
import OrderCreated from '../pages/OrderCreated';
import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoute = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312338' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreateOrder" component={CreateOrder} />
    <App.Screen name="OrderCreated" component={OrderCreated} />

    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoute;
