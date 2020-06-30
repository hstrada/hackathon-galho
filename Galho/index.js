import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

import Redirect from './src/screens/Redirect';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => Redirect);
