import React, { useEffect, useState } from 'react';

import { StyleSheet, Dimensions, Text } from 'react-native';

import Pdf from 'react-native-pdf';

import { useDispatch } from 'react-redux';

import { Grid } from '../../components';

import { createLeaf } from '../../store/ducks/books/actions';

const Book = ({ route }) => {
  const dispatch = useDispatch();

  const { bookName } = route.params;

  const [bookUrl, setbookUrl] = useState<string>('');

  useEffect(() => {
    setbookUrl('../../books/' + bookName + '.pdf');
  }, [bookName]);

  return (
    <Grid flex={1}>
      <Pdf
        source={require('../../books/rise_of_countinuous_testing.pdf')}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          dispatch(createLeaf(page));
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link presse: ${uri}`);
        }}
        style={styles.pdf}
      />
    </Grid>
  );
};

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Book;
