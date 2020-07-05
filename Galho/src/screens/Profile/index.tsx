/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { useSelector } from 'react-redux';

import { Grid, Typography } from '../../components';

import { getAchievements } from '../../store/ducks/achievements/selectors';

import { getBooks } from '../../store/ducks/books/selectors';

import { getPersonalData } from '../../store/ducks/user/selectors';

const Profile = () => {
  const { fullName } = useSelector(getPersonalData);

  const { leafs } = useSelector(getBooks);

  const { tree, branch } = useSelector(getAchievements);

  return (
    <Grid flex={1} backgroundColor="primary">
      <Grid
        alignItems="center"
        paddingTop="xlarge"
        paddingBottom="xxxlarge"
        justifyContent="center"
        backgroundColor="secondary">
        <Typography text={fullName} color="white" />
      </Grid>
      <Grid
        paddingBottom="xlarge"
        paddingTop="xlarge"
        paddingRight="xlarge"
        paddingLeft="xlarge"
        style={{
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          marginTop: -14,
        }}
        flex={1}
        backgroundColor="primary">
        <Grid
          flexDirection="row"
          justifyContent="space-between"
          paddingBottom="medium"
          marginBottom="xxlarge"
          style={{
            borderBottomColor: 'rgba(221, 169, 93, 0.4)',
            borderBottomWidth: 1,
          }}>
          <Typography text="Páginas Lidas" color="fourth" />
          <Typography text={leafs} color="tertiary" />
        </Grid>
        <Grid
          flexDirection="row"
          justifyContent="space-between"
          paddingBottom="medium"
          marginBottom="xxlarge"
          style={{
            borderBottomColor: 'rgba(221, 169, 93, 0.4)',
            borderBottomWidth: 1,
          }}>
          <Typography text="Galhos Conquistados" color="fourth" />
          <Typography text={branch} color="tertiary" />
        </Grid>
        <Grid
          flexDirection="row"
          justifyContent="space-between"
          paddingBottom="medium"
          marginBottom="xxlarge"
          style={{
            borderBottomColor: 'rgba(221, 169, 93, 0.4)',
            borderBottomWidth: 1,
          }}>
          <Typography text="Livros Finalizados" color="fourth" />
          <Typography text={tree} color="tertiary" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
