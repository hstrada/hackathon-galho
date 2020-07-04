import AsyncStorage from '@react-native-community/async-storage';

import { createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';

import Reactotron from '../config/reactotronConfig';

import rootReducer from './ducks/rootReducer';

import rootSaga from './sagas/rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

Reactotron.onCustomCommand({
  command: 'Logout',
  description: 'Clean Redux',
  handler: () => {
    AsyncStorage.clear().then(() => {});
  },
});

// const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, Reactotron.createEnhancer());
  const persistor = persistStore(store);

  // sagaMiddleware.run(rootSaga);

  return { store, persistor };
};

export default configureStore;
