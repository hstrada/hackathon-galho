import { createStore } from 'redux';

import Reactotron from '../config/reactotronConfig';

import rootReducer from './ducks/rootReducer';

export const store = createStore(rootReducer, Reactotron.createEnhancer());
