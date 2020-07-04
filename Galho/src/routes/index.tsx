import React from 'react';

import { useSelector } from 'react-redux';

import SplashScreen from '../screens/SplashScreen';

import { getPersonalData } from '../store/ducks/user/selectors';

import App from './app.routes';

import OnBoarding from './onboarding.routes';

const Routes = () => {
  const { fullName } = useSelector(getPersonalData);

  if (false) {
    return <SplashScreen />;
  }

  return <>{fullName === undefined ? <OnBoarding /> : <App />}</>;
};

export default Routes;
