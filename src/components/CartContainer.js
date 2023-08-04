import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

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
        <h2>your bag</h2>
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
        <hr />
        <h4>
          total <span>${total}</span>
        </h4>
      </footer>
    </section>
  );
};

export default CartContainer;
