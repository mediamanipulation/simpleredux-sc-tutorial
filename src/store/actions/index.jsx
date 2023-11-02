export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

// Action to trigger the API call
export const getUsersFetch = () => {
    console.log('Action is being dispatched');
    return {
      type: GET_USERS_FETCH,
    };
  };
  

// Action to store the users when the API call is successful
export const getUsersSuccess = (users) => {
    console.log('Action GET_USERS_SUCCESS is being dispatched');
    console.log('actions users - ',users)
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    };
};

//---------------------------------------------------------------------------------------

// import { createSlice } from '@reduxjs/toolkit';

// const usersSlice = createSlice({
//   name: 'users',
//   initialState: {
//     data: [],
//     loading: false,
//   },
//   reducers: {
//     getUsersFetch: (state) => {
//       state.loading = true;
//     },
//     getUsersSuccess: (state, action) => {
//       state.data = action.payload;
//       state.loading = false;
//     },
//   },
// });

// export const { getUsersFetch, getUsersSuccess } = usersSlice.actions;
// export default usersSlice.reducer;
