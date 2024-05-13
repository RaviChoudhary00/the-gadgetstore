import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
        const index = state.findIndex(item => item.id === action.payload.id);

        if (index !== -1) {
            // If product already exists in cart, increase quantity by 2
            state[index].quantity += 1;
          } else {
            // If product is not present in cart, add it
            state.push(action.payload);
          }
    },
    remove(state, action) {
      return state.filter((item) => item.model !== action.payload.model);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
