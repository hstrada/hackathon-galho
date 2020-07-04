import * as types from './action-types';

const initialState = {
  data: {},
  loading: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_PERSONAL_DATA:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};
