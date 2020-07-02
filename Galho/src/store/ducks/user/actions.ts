import { CREATE_PERSONAL_DATA } from './action-types';

export const createPersonalData = (content) => ({
  type: CREATE_PERSONAL_DATA,
  payload: {
    fullName: content.fullName,
    dateOfBirth: content.dateOfBirth,
  },
});
