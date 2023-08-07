import React from 'react';
import { AddIcon, DecreaseIcon, RemoveIcon } from '../icons';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <div className='grid-item-1'>
        <img
          src={img}
          alt={title}
        />
      </div>
      <div className='grid-item-2'>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}€</h4>
      </div>
      <div className='amount-btn-conti grid-item-3'>
        <button
          className='amount-btn'
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <AddIcon />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
            if (amount === 0) {
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <DecreaseIcon />
        </button>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          <RemoveIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
