import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(cartItems);
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
      </div>
      <footer>
        <div className='footer-conti'>
          <hr />

          <div className='cart-total'>
            {' '}
            <h4>
              total <span>{total}€</span>
            </h4>
            <button
              className='btn clear-btn'
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
