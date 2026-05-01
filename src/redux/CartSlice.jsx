import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
