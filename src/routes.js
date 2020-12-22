/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

// import SelectProvider from '~/pages/New/SelectProvider';
// import SelectDateTime from '~/pages/New/SelectDateTime';
// import Confirm from '~/pages/New/Confir';

const MainStack = createStackNavigator();
const SignStack = createStackNavigator();
const NewStack = createStackNavigator();
const AppTabs = createBottomTabNavigator();

const SignNavigator = () => (
  <SignStack.Navigator screenOptions={{ headerShown: false }}>
    <SignStack.Screen name="SignIn" component={SignIn} />
    <SignStack.Screen name="SignUp" component={SignUp} />
  </SignStack.Navigator>
);

const NewNavigator = ({ navigation }) => (
  <NewStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTintColor: '#fff',
      headerLeftContainerStyle: { marginLeft: 20 },
    }}
  >
    <NewStack.Screen
      options={{
        title: 'Selecione o prestador',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      }}
      name="SelectProvider"
      component="{SelectProvider}"
    />
    <NewStack.Screen
      options={{
        title: 'Selecione o horário',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectProvider')}
          >
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      }}
      name="SelectDateTime"
      component="{SelectDateTime}"
    />
    <NewStack.Screen
      options={{
        title: 'Confirmar agendamento',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectDateTime')}
          >
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      }}
      name="Confirm"
      component="{Confirm}"
    />
  </NewStack.Navigator>
);

const AppNavigator = () => (
  <AppTabs.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: '#fff',
      inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      style: { backgroundColor: '#ff1000', borderTopWidth: 0 },
    }}
  >
    <AppTabs.Screen
      options={{
        tabBarLabel: 'Agendamentos',
        tabBarIcon: ({ color }) => (
          <Icon name="event" size={20} color={color} />
        ),
      }}
      name="Dashboard"
      component={Dashboard}
    />
    <AppTabs.Screen
      options={{
        tabBarVisible: false,
        tabBarLabel: 'Agendar',
        tabBarIcon: ({ color }) => (
          <Icon name="add-circle-outline" size={20} color={color} />
        ),
      }}
      name="New"
      component={NewNavigator}
    />
    <AppTabs.Screen
      options={{
        tabBarLabel: 'Meu Perfil',
        tabBarIcon: ({ color }) => (
          <Icon name="person" size={20} color={color} />
        ),
      }}
      name="Profile"
      component={Profile}
    />
  </AppTabs.Navigator>
);

export default (isSigned = false) => () => (
  <NavigationContainer>
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isSigned ? 'App' : 'Sign'}
    >
      <MainStack.Screen name="Sign" component={SignNavigator} />
      <MainStack.Screen name="App" component={AppNavigator} />
    </MainStack.Navigator>
  </NavigationContainer>
);
