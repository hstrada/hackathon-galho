import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import routes from '../constants/routes';

import Home from '../screens/Home';

import Profile from '../screens/Profile';

/**
 * HomeStack
 */
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name={routes.HOME} component={Home} />
  </HomeStack.Navigator>
);

/**
 * ProfileStack
 */
const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name={routes.PROFILE} component={Profile} />
  </ProfileStack.Navigator>
);

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeStackScreen} />
      <Stack.Screen name="Profile" component={ProfileStackScreen} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
