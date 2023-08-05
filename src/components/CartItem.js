import React from 'react';
import { AddIcon, DecreaseIcon, RemoveIcon } from '../icons';
import { addItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img
        src={img}
        alt={title}
      />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}€</h4>
      </div>
      <div className='amount-btn-conti'>
        <button
          className='amount-btn'
          onClick={() => {
            dispatch(addItem());
          }}
        >
          <AddIcon />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn'>
          <DecreaseIcon />
        </button>
      </div>
      <button className='remove-btn'>
        <RemoveIcon />
      </button>
    </article>
  );
};

export default CartItem;
