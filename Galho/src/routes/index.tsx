import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import SplashScreen from '../screens/SplashScreen';

import { getPersonalData } from '../store/ducks/user/selectors';

import App from './app.routes';

import OnBoarding from './onboarding.routes';

const Routes = () => {
  const { fullName } = useSelector(getPersonalData);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <>{fullName === undefined ? <OnBoarding /> : <App />}</>;
};

export default Routes;
