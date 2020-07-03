import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';

import React from 'react';

import { Provider } from 'react-redux';

import Routes from '../../routes/';

import { store } from '../../store/index';

import { galhoTheme } from '../../theme';

const Redirect = () => {
  return (
    <ThemeProvider theme={galhoTheme}>
      <NavigationContainer>
        <Provider store={store}>
          <Routes />
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Redirect;
