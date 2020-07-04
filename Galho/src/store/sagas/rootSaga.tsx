import { all, fork } from 'redux-saga/effects';

import app from './app';

export default function* rootSaga() {
  return yield all([fork(app)]);
}
