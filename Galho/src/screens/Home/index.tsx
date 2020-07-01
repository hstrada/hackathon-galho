import React from 'react';

import { Grid, Typography, ButtonOutline, ButtonBase } from '../../components';

const Home = () => {
  return (
    <Grid
      flex={1}
      paddingBottom="medium"
      paddingTop="medium"
      paddingRight="medium"
      paddingLeft="medium"
      backgroundColor="primary">
      <Typography text="Teste" />
      <Grid marginBottom="medium">
        <ButtonOutline onPress={() => console.log('teste')} text="Login" />
      </Grid>
      <ButtonBase onPress={() => console.log('teste')} text="Login" />
    </Grid>
  );
};

export default Home;
