// serviceTypeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const serviceTypeSlice = createSlice({
  name: 'serviceType',
  initialState: {
    selectedServiceType: null,
  },
  reducers: {
    setSelectedServiceType: (state, action) => {
      state.selectedServiceType = action.payload;
    },
  },
});

export const { setSelectedServiceType } = serviceTypeSlice.actions;

export default serviceTypeSlice.reducer;
