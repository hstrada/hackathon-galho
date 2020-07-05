import React from 'react';

import { useSelector } from 'react-redux';

import { Grid, Typography, Header, Book } from '../../components';

import { getBooks } from '../../store/ducks/books/selectors';

import { getPersonalData } from '../../store/ducks/user/selectors';

import colors from '../../theme/colors';

import format from '../../utils/index';

const Home = ({ navigation }) => {
  const { fullName } = useSelector(getPersonalData);

  const { leafs, totalPages } = useSelector(getBooks);

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
        style={{
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          marginTop: -14,
        }}
        backgroundColor="primary">
        <Typography
          text={'Olá ' + fullName}
          fontFamily="latoBold"
          fontSize="xxm"
          color="fourth"
        />
        <Grid
          marginTop="medium"
          paddingBottom="medium"
          style={{ borderBottomColor: colors.tertiary, borderBottomWidth: 1 }}>
          <Typography
            text="Sua meta diária"
            color="fourth"
            fontFamily="latoRegular"
            fontSize="m"
          />
        </Grid>
        <Grid marginTop="xlarge">
          <Book.Item
            progress={format.format.percentage(leafs, totalPages)}
            imgSource={require('../../books/rise.png')}
            label={formatName('rise_of_countinuous_testing')}
            navigation={navigation}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
