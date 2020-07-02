import { combineReducers } from 'redux';

import user from './user/reducer';

const appReducer = combineReducers({
  user,
});

export default (state: any, action: any) => {
  return appReducer(state, action);
};
