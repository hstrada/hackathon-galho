import { takeLatest, put } from 'redux-saga/effects';

import * as types from '../ducks/achievements/action-types';

function* runTest({ payload }): any {
  try {
    yield put({ type: types.INCREASE_LEAF, payload });
  } catch (error) {
    console.log(error);
  }
}

const saga = function* (): Generator {
  yield takeLatest(types.CREATE_LEAF, runTest);
};

export default saga;
