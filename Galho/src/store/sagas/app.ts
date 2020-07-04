import { takeLatest } from 'redux-saga/effects';

function* runTest(): any {
  return '';
}

const saga = function* (): Generator {
  yield takeLatest('Teste', runTest);
};

export default saga;
