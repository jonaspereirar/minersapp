import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import CreateOrder from '../pages/CreateOrder';
import OrderCreated from '../pages/OrderCreated';
import Profile from '../pages/Profile';

import Checklist from '../pages/Checklist';
import Directions from '../pages/Directions';
import Look from '../pages/Look';

import Production from '../pages/Areas/Production';

import Manutention from '../pages/Areas/Manutention';
import Mechanics from '../pages/Areas/Manutention/Mechanics';
import Eletrics from '../pages/Areas/Manutention/Eletrics';

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

    <App.Screen name="Directions" component={Directions} />
    <App.Screen name="Checklist" component={Checklist} />
    <App.Screen name="Look" component={Look} />

    <App.Screen name="Production" component={Production} />

    <App.Screen name="Manutention" component={Manutention} />
    <App.Screen name="Mechanics" component={Mechanics} />
    <App.Screen name="Eletrics" component={Eletrics} />
  </App.Navigator>
);

export default AppRoute;
