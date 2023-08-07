import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, newItem, resetCart } from '../features/cart/cartSlice';

const CartContainer = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (cartItems.length < 1) {
    return (
      <section className='cart'>
        <h2>your bag</h2>
        <h4 className='empty-cart'> is currently empty</h4>
        <div className='reset-btn-conti'>
          <button
            className='reset-btn'
            onClick={() => {
              dispatch(resetCart());
            }}
          >
            Back to store
          </button>
        </div>
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
          <p
            id='message'
            className='message'
          >
            That's all!
          </p>
          <button
            className='btn clear-btn'
            onClick={() => {
              dispatch(newItem());
            }}
          >
            More Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
