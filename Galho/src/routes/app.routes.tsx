import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import Book from '../screens/Book';

import Home from '../screens/Home';

import Profile from '../screens/Profile';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Book" component={Book} />
      <AppStack.Screen name="Profile" component={Profile} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
