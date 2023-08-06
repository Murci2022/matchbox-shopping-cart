import { createSlice } from '@reduxjs/toolkit';
import Items from '../../Items';
const initialState = {
  cartItems: Items.slice(0, 2),
  amount: 2,
  total: 0,
  isLoading: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        console.log('Item Amount:', typeof item.amount);
        console.log('Item Price:', typeof item.price);
        if (
          typeof item.amount !== 'number' ||
          typeof item.price !== 'number' ||
          isNaN(item.price)
        ) {
          console.log('invalid data type');
        }

        amount += item.amount;
        total += item.amount * parseFloat(item.price);

        console.log('total', total);
      });
      state.amount = amount;
      state.total = total;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.amount = state.amount - 1;
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
      state.amount += 1;
    },
  },
});

console.log(cartSlice);

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  newItem,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
