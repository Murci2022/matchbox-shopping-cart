import { createSlice } from '@reduxjs/toolkit';
import Items from '../../Items';
const initialState = {
  cartItems: Items,
  amount: 1,
  total: 0,
  isLoading: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addItem: (state, action) => {
      state.amount = action.payload + 1;
    },
  },
});

console.log(cartSlice);

export const { clearCart, addItem } = cartSlice.actions;
export default cartSlice.reducer;
