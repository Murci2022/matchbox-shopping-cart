import { createSlice } from '@reduxjs/toolkit';
import Items from '../../Items';
const initialState = {
  cartItems: Items.slice(0, 2),
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
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    newItem: (state, action) => {
      let newItem;
      for (let i = 0; i < Items.length; i++) {
        const itemExists = state.cartItems.some(
          (item) => item.id === Items[i].id
        );
        if (!itemExists) {
          newItem = Items[i];
          break;
        }
      }
      if (!newItem) return;

      state.cartItems = [...state.cartItems, newItem];
    },
  },
});

console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, newItem } =
  cartSlice.actions;
export default cartSlice.reducer;
