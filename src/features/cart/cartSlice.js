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
});

//console.log(cartSlice);

export default cartSlice.reducer;
