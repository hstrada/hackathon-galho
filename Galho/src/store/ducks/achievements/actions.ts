import { CREATE_LEAF } from './action-types';

export const createLeaf = (content) => ({
  type: CREATE_LEAF,
  payload: content,
});
