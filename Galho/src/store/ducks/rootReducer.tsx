import { combineReducers } from 'redux';

import achievements from './achievements/reducer';

import user from './user/reducer';

const appReducer = combineReducers({
  user,
  achievements,
});

export default (state: any, action: any) => {
  return appReducer(state, action);
};
