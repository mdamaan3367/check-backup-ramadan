// itemSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null, // Initial state for data
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.data = action.payload; // Set data in state
    },
  },
});

export const { setItems } = itemSlice.actions;
export const { actions: itemActions, reducer: itemReducer } = itemSlice;

export const selectItems = (state) => state.items.data;

export default itemSlice.reducer;
