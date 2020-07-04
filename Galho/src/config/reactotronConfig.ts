import Reactotron from 'reactotron-react-native';

import { reactotronRedux } from 'reactotron-redux';

import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.configure({ name: 'Galho' })
  .use(reactotronRedux()) //  <- here i am!
  .use(sagaPlugin({ except: [''] }))
  .connect(); //Don't forget about me!

export default reactotron;
