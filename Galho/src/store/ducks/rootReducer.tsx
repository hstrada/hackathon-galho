import { combineReducers } from 'redux';

import achievements from './achievements/reducer';

import books from './books/reducer';

import user from './user/reducer';

const appReducer = combineReducers({
  achievements,
  books,
  user,
});

export default (state: any, action: any) => {
  return appReducer(state, action);
};
