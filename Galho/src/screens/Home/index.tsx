/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { ScrollView } from 'react-native';

import { useSelector } from 'react-redux';

import { Grid, Typography, Header, Book } from '../../components';

import { getBooks } from '../../store/ducks/books/selectors';

import { getPersonalData } from '../../store/ducks/user/selectors';

import { format } from '../../utils/index';

const Home = ({ navigation }) => {
  const { fullName } = useSelector(getPersonalData);

  const { leafs, totalPages } = useSelector(getBooks);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            style={{
              borderBottomColor: 'rgba(221, 169, 93, 0.4)',
              borderBottomWidth: 1,
            }}>
            <Typography
              text="Continuar lendo"
              color="fourth"
              fontFamily="latoRegular"
              fontSize="m"
            />
          </Grid>
          <Grid marginTop="xxxlarge">
            <Book.Item
              progress={format.percentage(leafs, totalPages)}
              imgSource={require('../../books/rise.png')}
              label={format.bookName('rise_of_countinuous_testing')}
              navigation={navigation}
            />
          </Grid>
        </Grid>
      </Grid>
    </ScrollView>
  );
};

export default Home;
