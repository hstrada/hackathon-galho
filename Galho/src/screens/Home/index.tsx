import React from 'react';

import { useSelector } from 'react-redux';

import { Grid, Typography, Header } from '../../components';

import { getPersonalData } from '../../store/ducks/user/selectors';

const Home = () => {
  const { fullName } = useSelector(getPersonalData);

  return (
    <Grid flex={1}>
      <Header />
      <Grid
        flex={1}
        paddingBottom="xlarge"
        paddingTop="xlarge"
        paddingRight="xlarge"
        paddingLeft="xlarge"
        backgroundColor="primary">
        <Typography
          text={'Olá ' + fullName}
          fontFamily="latoBold"
          fontSize="xxm"
          color="fourth"
        />
        <Grid marginTop="medium">
          <Typography
            text="Sua meta diária"
            color="fourth"
            fontFamily="latoRegular"
            fontSize="m"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
