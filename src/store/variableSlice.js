// slice.js

import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  sidebar: false
};

// Create slice
const variableSlice = createSlice({
  name: 'variable',
  initialState,
  reducers: {
    toggleTrue: (state) => {
      state.sidebar = true;
    },
    toggleFalse: (state) => {
      state.sidebar = false;
    }
  }
});

// Export actions and reducer
export const { toggleTrue, toggleFalse } = variableSlice.actions;
export default variableSlice.reducer;
