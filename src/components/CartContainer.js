import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, newItem } from '../features/cart/cartSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(total, 'total');
  if (amount < 1) {
    return (
      <section className='cart'>
        <h2>your bag</h2>
        <h4 className='empty-cart'> is currently empty</h4>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h3>choose your car</h3>
      </header>
      <div>
        {cartItems.map((item) => {
          console.log(item);
          return (
            <CartItem
              key={item.id}
              {...item}
            />
          );
        })}
        <div className='btn-container'>
          <button
            className='btn clear-btn'
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
          <button
            className='btn clear-btn'
            onClick={() => {
              dispatch(newItem());
            }}
          >
            New Item
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
