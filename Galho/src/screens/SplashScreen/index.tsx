import React from 'react';

import { View, Text } from 'react-native';

import { useSelector } from 'react-redux';

import { getPersonalData } from '../../store/ducks/user/selectors';

const SplashScreen = () => {
  const { fullName } = useSelector(getPersonalData);

  return (
    <View>
      <Text>{fullName}</Text>
    </View>
  );
};

export default SplashScreen;
