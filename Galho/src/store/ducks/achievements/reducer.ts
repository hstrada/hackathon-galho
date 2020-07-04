// leaf, branch, tree
import * as types from './action-types';

const initialState = {
  data: {
    leaf: 0,
    branch: 0,
    tree: 0,
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_LEAF:
      return {
        data: { ...state, leaf: action.payload },
      };
    case types.CREATE_BRANCH:
      return {
        data: { ...state, branch: action.payload },
      };
    case types.CREATE_TREE:
      return {
        data: { ...state, tree: action.payload },
      };

    default:
      return state;
  }
};
