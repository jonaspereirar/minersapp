import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import Route from "./Route";

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();

const routes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />

    <Auth.Screen name="/dashboard" component={Dashboard} isPrivate />
  </Auth.Navigator>
);

export default routes;
