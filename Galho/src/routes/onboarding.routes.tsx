import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import Intro from '../screens/OnBoarding/Intro';

import PersonalData from '../screens/OnBoarding/PersonalData';

const OnBoardingStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <OnBoardingStack.Navigator>
      <OnBoardingStack.Screen
        name="Intro"
        options={() => ({
          headerShown: false,
        })}
        component={Intro}
      />
      <OnBoardingStack.Screen name="PersonalData" component={PersonalData} />
    </OnBoardingStack.Navigator>
  );
};

export default AppRoutes;
