// leaf, branch, tree
import * as types from './action-types';

const initialState = {
  data: {
    leaf: 0,
    branch: 0,
    tree: 0,
  },
  config: {
    leafGoal: 10,
    branchGoal: 10,
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case types.INCREASE_LEAF:
      return {
        ...state,
        data: { ...state.data, leaf: state.data.leaf + action.payload },
      };
    case types.CREATE_BRANCH:
      return {
        ...state,
        data: { ...state.data, branch: state.data.branch + 1 },
      };
    case types.CREATE_TREE:
      return {
        ...state,
        data: { ...state.data, tree: state.data.tree + 1 },
      };

    default:
      return state;
  }
};
