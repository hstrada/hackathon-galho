import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import routes from '../constants/routes';

import Home from '../screens/Home';

import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
