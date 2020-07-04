export const getPersonalData = (state) =>
  state.user.data || {
    fullName: '',
  };
