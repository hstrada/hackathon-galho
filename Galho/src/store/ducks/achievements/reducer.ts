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
  console.log(action.payload);
  switch (action.type) {
    case types.INCREASE_LEAF:
      return {
        ...state,
        data: { ...state.data, leaf: action.payload },
      };
    case types.CREATE_BRANCH:
      return {
        ...state,
        branch: action.payload,
      };
    case types.CREATE_TREE:
      return {
        ...state,
        tree: action.payload,
      };

    default:
      return state;
  }
};
