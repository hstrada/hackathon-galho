import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import Home from '../screens/Home';

import Profile from '../screens/Profile';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Profile" component={Profile} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
