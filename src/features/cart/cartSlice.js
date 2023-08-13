import { createSlice } from '@reduxjs/toolkit';
import Items from '../../Items';
const initialState = {
  cartItems: Items.slice(0, 4),
  amount: 2,
  total: 0,
  isLoading: 0,
  clickedItem: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        if (
          typeof item.amount !== 'number' ||
          typeof item.price !== 'number' ||
          isNaN(item.price)
        ) {
        }

        amount += item.amount;
        total += item.amount * parseFloat(item.price);
      });
      state.amount = amount;
      state.total = total;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    resetCart: (state) => {
      state.cartItems = initialState.cartItems.slice(0, 2);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.amount = state.amount - 1;
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      console.log(cartItem.amount);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
      const newAmount = cartItem.amount;
      if (newAmount === 0) {
        const messageElement = document.getElementById('message');
        messageElement.style.display = 'block';
        messageElement.style.opacity = '1';
        setTimeout(() => {
          messageElement.style.opacity = '0';
          setTimeout(() => {
            messageElement.style.display = 'none';
          }, 1000);
        }, 1000);
      }
    },

    showPopup: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      console.log(cartItem.clickedItem, 'cartItem');
      cartItem.isPopupVisible = true;

      console.log(cartItem.id, cartItem.isPopupVisible);
    },
    cancelPopup: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);

      cartItem.isPopupVisible = false;
    },
    newItem: (state, action) => {
      let newItem;

      if (Items.length !== state.cartItems.length + 1) {
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
      } else {
        const messageElement = document.getElementById('message');
        messageElement.style.display = 'block';
        messageElement.style.opacity = '1';
        setTimeout(() => {
          messageElement.style.opacity = '0';
          setTimeout(() => {
            messageElement.style.display = 'none';
          }, 1000);
        }, 1000);
      }
    },
  },
});

console.log(initialState);

export const {
  clearCart,
  resetCart,
  removeItem,
  increase,
  decrease,
  showPopup,
  cancelPopup,
  newItem,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
