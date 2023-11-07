import { createSlice } from '@reduxjs/toolkit';

const Theme = createSlice({
  name: 'theme',
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleTheme } = Theme.actions;
export default Theme.reducer;
