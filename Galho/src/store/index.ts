import { createStore } from 'redux';

import rootReducer from './ducks/rootReducer';

export const store = createStore(rootReducer);
