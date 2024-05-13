// slice.js

import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  overview: false,
  product:{}
};

// Create slice
const overviewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {
    toggleOverviewTrue: (state,action) => {
        state.product = action.payload
        state.overview = true;

    },
    toggleOverviewFalse: (state) => {
      state.overview = false;
    }
  }
});

// Export actions and reducer
export const { toggleOverviewTrue, toggleOverviewFalse } = overviewSlice.actions;
export default overviewSlice.reducer;
