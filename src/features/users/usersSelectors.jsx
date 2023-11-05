// Path: src/features/users/usersSelectors.js
import { createSelector } from '@reduxjs/toolkit';

// Simple selector
export const selectUsersState = (state) => state.users;

// Selector to get the user list
export const selectUsers = createSelector(
  [selectUsersState], // You pass a list of selectors
  (usersState) => usersState.users // The output of your selectors is passed to this function
);

// Selector to get the loading state
export const selectUsersLoading = createSelector(
  [selectUsersState],
  (usersState) => usersState.loading
);

// Selector to get the error state
export const selectUsersError = createSelector(
  [selectUsersState],
  (usersState) => usersState.error
);

