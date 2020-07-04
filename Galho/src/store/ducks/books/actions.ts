import { CREATE_BOOK_LEAF } from './action-types';

export const createLeaf = (content) => ({
  type: CREATE_BOOK_LEAF,
  payload: content,
});
