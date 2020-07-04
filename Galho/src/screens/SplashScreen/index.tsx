import React from 'react';

import { Image } from 'react-native';

import { Grid } from '../../components';

const SplashScreen = () => {
  return (
    <Grid
      flex={1}
      backgroundColor="secondary"
      justifyContent="center"
      alignItems="center">
      <Image source={require('../../assets/imgs/SplashIcon.png')} />
    </Grid>
  );
};

export default SplashScreen;
