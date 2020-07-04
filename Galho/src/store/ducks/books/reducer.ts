// leaf, branch, tree
import * as types from './action-types';

const initialState = {
  data: {
    leafs: 0,
    bookId: 1,
    bookName: 'rise_of_countinuous_testing.pdf',
    totalPages: 28,
    completed: false,
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case types.INCREASE_BOOK_LEAF:
      return {
        ...state,
        data: { ...state.data, leafs: action.payload },
      };
    case types.COMPLETE_BOOK:
      return {
        ...state,
        data: { ...state.data, completed: true },
      };

    default:
      return state;
  }
};
