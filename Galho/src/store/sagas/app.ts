import { takeLatest, put, select, takeEvery, call } from 'redux-saga/effects';

import * as achievementsTypes from '../ducks/achievements/action-types';

import { getAchievementsConfig } from '../ducks/achievements/selectors';

import * as booksTypes from '../ducks/books/action-types';

import { getBooks } from '../ducks/books/selectors';

function* runTest({ payload }): any {
  try {
    const { leafs, totalPages } = yield select(getBooks);

    if (payload > leafs) {
      yield put({ type: booksTypes.INCREASE_BOOK_LEAF, payload: payload });
    }

    if (payload === totalPages) {
      yield put({ type: booksTypes.COMPLETE_BOOK });
      yield put({ type: achievementsTypes.CREATE_TREE });
    }
  } catch (error) {
    console.log(error);
  }
}

function* checkForBranchsAndLeafs() {
  try {
    const { leafs } = yield select(getBooks);
    const { leafGoal, branchGoal } = yield select(getAchievementsConfig);
    if (leafs >= leafGoal) {
      const increaseLeaf = Number(leafs / leafGoal);

      yield put({
        type: achievementsTypes.CREATE_LEAF,
        payload: Math.round(increaseLeaf),
      });
    }
    if (leafs >= branchGoal) {
      const increaseBranch = Number(leafs / branchGoal);
      yield put({
        type: achievementsTypes.CREATE_BRANCH,
        payload: Math.round(increaseBranch),
      });
    }
  } catch (error) {}
}

const saga = function* (): Generator {
  yield takeLatest(booksTypes.CREATE_BOOK_LEAF, runTest);
  yield takeEvery(booksTypes.INCREASE_BOOK_LEAF, checkForBranchsAndLeafs);
};

export default saga;
