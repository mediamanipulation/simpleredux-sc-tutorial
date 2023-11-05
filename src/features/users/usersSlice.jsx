// Path: src/features/users/usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    getUsersFetch: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    getUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUsersFetch, getUsersSuccess, getUsersFailure } = usersSlice.actions;
export default usersSlice.reducer;
