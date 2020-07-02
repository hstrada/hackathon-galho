import React from 'react';

// import SplashScreen from '../screens/SplashScreen';

// import AppRoutes from './app.routes';

import { Provider } from 'react-redux';

import { store } from '../store';

import OnBoarding from './onboarding.routes';

const Routes: React.FC = () => {
  return (
    <Provider store={store}>
      <OnBoarding />
    </Provider>
  );

  // return true ? <AppRoutes /> : <OnBoarding />;
};

export default Routes;
