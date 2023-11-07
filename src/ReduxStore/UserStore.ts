import { createSlice } from '@reduxjs/toolkit';
import { usersProp } from '../types';

const userStore = createSlice({
  name: 'users',
  initialState: {
    value: [] as usersProp[],
  },
  reducers: {
    addUsers: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { addUsers } = userStore.actions;
export default userStore.reducer;
