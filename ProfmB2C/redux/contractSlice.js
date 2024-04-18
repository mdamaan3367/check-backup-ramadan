import { createSlice } from '@reduxjs/toolkit';

const contractSlice = createSlice({
  name: 'contract',
  initialState: {
    selectedDateTimeArray: [],
    priceValue: null,
    day2: null,
    month2: null,
    year2: null,
  },
  reducers: {
    // Action to update selectedDateTimeArray
    updateSelectedDateTimeArray(state, action) {
      state.selectedDateTimeArray = action.payload;
    },
    // Action to update priceValue
    updatePriceValue(state, action) {
      state.priceValue = action.payload;
    },
    // Action to update day2
    updateDay2(state, action) {
      state.day2 = action.payload;
    },
    // Action to update month2
    updateMonth2(state, action) {
      state.month2 = action.payload;
    },
    // Action to update year2
    updateYear2(state, action) {
      state.year2 = action.payload;
    },
  },
});

export const {
  updateSelectedDateTimeArray,
  updatePriceValue,
  updateDay2,
  updateMonth2,
  updateYear2,
} = contractSlice.actions;

export default contractSlice.reducer;
