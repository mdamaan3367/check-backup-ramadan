// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export const { actions: userActions, reducer: userReducer } = userSlice;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
