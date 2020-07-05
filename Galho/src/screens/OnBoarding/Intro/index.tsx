import React from 'react';

import { Image } from 'react-native';

import { Grid, Typography, ButtonBase } from '../../../components';

const Intro = ({ navigation }) => {
  return (
    <Grid
      flex={1}
      paddingTop="xlarge"
      paddingBottom="xlarge"
      paddingRight="xlarge"
      paddingLeft="xlarge"
      backgroundColor="primary"
      justifyContent="space-between">
      <Grid>
        <Image
          source={require('../../../assets/imgs/onboarding/intro.png')}
          resizeMode="center"
          style={{ width: 300, height: 300 }}
        />
      </Grid>
      <Grid>
        <Typography
          align="center"
          text="Uma nova maneira de incentivar sua leitura diária."
          color="fourth"
          fontSize="xxp"
        />
      </Grid>
      <Grid>
        <ButtonBase
          onPress={() => navigation.navigate('PersonalData')}
          text="Iniciar"
        />
      </Grid>
    </Grid>
  );
};

export default Intro;
