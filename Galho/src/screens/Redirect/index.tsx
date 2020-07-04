import { NavigationContainer } from '@react-navigation/native';

import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';

import React from 'react';

import { Provider } from 'react-redux';

import Routes from '../../routes/';

import configureStore from '../../store/index';

import { galhoTheme } from '../../theme';

const Redirect = () => {
  const { store, persistor } = configureStore();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={galhoTheme}>
            <Routes />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default Redirect;
