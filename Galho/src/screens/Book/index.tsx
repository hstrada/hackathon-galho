import React, { useEffect, useState } from 'react';

import { StyleSheet, Dimensions } from 'react-native';

import Pdf from 'react-native-pdf';

import { Grid } from '../../components';

const Book = ({ route }) => {
  const { bookName } = route.params;

  const [bookUrl, setbookUrl] = useState<string>('');

  useEffect(() => {
    setbookUrl('../../books/' + bookName + '.pdf');
  }, [bookName]);

  return (
    <Grid flex={1}>
      <Pdf
        source={require(bookUrl)}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
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
