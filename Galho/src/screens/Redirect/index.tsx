import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';

import React from 'react';

import Routes from '../../routes/';

import { galhoTheme } from '../../theme';

const Redirect = () => {
  return (
    <ThemeProvider theme={galhoTheme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Redirect;
