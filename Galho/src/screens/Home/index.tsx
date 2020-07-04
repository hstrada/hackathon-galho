import React from 'react';

import { useSelector } from 'react-redux';

import { Grid, Typography, Header } from '../../components';

import { getPersonalData } from '../../store/ducks/user/selectors';

const Home = ({ navigation }) => {
  const { fullName } = useSelector(getPersonalData);

  const formatName = (matheus: string) => {
    return matheus
      .split('_')
      .map((value: string) => value.charAt(0).toUpperCase() + value.slice(1))
      .join(' ');
  };

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
        <Grid marginTop="xlarge">
          <Typography
            onPress={() =>
              navigation.navigate('Book', {
                bookName: 'rise_of_countinuous_testing',
              })
            }
            text={formatName('rise_of_countinuous_testing')}
            fontFamily="latoBold"
            fontSize="xxm"
            color="fourth"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
