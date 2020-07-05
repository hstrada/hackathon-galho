import React from 'react';

import Grid from '../../Grid';

import Typography from '../../Typography';

import {
  Container,
  BookImage,
  ContainerPercentage,
  Percentage,
} from './styles';

const Item = ({ label, navigation, imgSource, progress = 0 }) => {
  return (
    <Container>
      <BookImage source={imgSource} />
      <Grid
        flexDirection="column"
        marginLeft="medium"
        paddingRight="medium"
        flex={1}>
        <Grid flex={1}>
          <Typography
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ flex: 1, flexWrap: 'wrap' }}
            onPress={() =>
              navigation.navigate('Book', {
                bookName: 'rise_of_countinuous_testing',
              })
            }
            text={label}
            fontFamily="latoBold"
            fontSize="xxp"
            color="fourth"
          />
        </Grid>
        <Grid>
          <Typography text={progress + '%'} />
        </Grid>
        <Grid>
          <ContainerPercentage>
            <Percentage progress={progress} />
          </ContainerPercentage>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Item;
