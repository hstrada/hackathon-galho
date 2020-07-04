import { takeLatest, put, select, takeEvery } from 'redux-saga/effects';

import * as achievementsTypes from '../ducks/achievements/action-types';

import * as booksTypes from '../ducks/books/action-types';

import { getBooks } from '../ducks/books/selectors';

function* runTest({ payload }): any {
  try {
    // check if book is complete
    // yield put({ type: booksTypes.INCREASE_BOOK_LEAF, payload });
    const { leafs, totalPages } = yield select(getBooks);

    if (payload > leafs) {
      yield put({ type: booksTypes.INCREASE_BOOK_LEAF, payload: payload });
    }

    if (payload === totalPages) {
      yield put({ type: booksTypes.COMPLETE_BOOK });
    }
  } catch (error) {
    console.log(error);
  }
}

function* createTree() {
  try {
    yield put({ type: achievementsTypes.CREATE_TREE });
  } catch (error) {}
}

const saga = function* (): Generator {
  yield takeLatest(booksTypes.CREATE_BOOK_LEAF, runTest);
  yield takeEvery(booksTypes.COMPLETE_BOOK, createTree);
};

export default saga;
