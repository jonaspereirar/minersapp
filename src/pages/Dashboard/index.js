import React from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { LogoutButton } from './styles';

import { signOut } from '~/store/modules/auth/actions';

import Background from '~/components/Background';
// import { Container } from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <View>
        <LogoutButton onPress={handleLogout}>Sair do GoBarber</LogoutButton>
      </View>
    </Background>
  );
};

export default Dashboard;
