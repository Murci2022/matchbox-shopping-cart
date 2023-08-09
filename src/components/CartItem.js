import React from 'react';
import { AddIcon, DecreaseIcon, RemoveIcon } from '../icons';
import {
  removeItem,
  increase,
  decrease,
  showPopup,
  cancelPopup,
} from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = ({ id, img, title, price, amount, isPopupVisible }) => {
  const dispatch = useDispatch();
  const clickedItem = useSelector((state) => state.cart.clickedItem);
  /* isPopupVisible = false; */
  console.log(isPopupVisible, 'intheconsole');
  console.log(clickedItem, 'intheconsole');
  return (
    <>
      <article className='cart-item'>
        <div
          className='grid-item-1'
          onClick={() => {
            dispatch(showPopup({ id }));
          }}
        >
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
          {/* ------------DECREASE */}
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
          {/* ------------DECREASE END */}
          <p
            className='amount'
            style={{ color: amount > 0 ? '#ff4800' : 'white' }}
          >
            {amount}
          </p>
          {/* ---------------add----------------- */}
          <button
            className='amount-btn'
            onClick={() => {
              dispatch(increase({ id }));
            }}
          >
            <AddIcon />
          </button>
          {/* ---------------add end----------------- */}
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
      {isPopupVisible === true ? (
        <div
          key={id}
          className='popup-img'
          style={{ display: isPopupVisible ? 'block' : 'none' }}
        >
          <span
            onClick={() => {
              dispatch(cancelPopup({ id }));
            }}
          >
            <RemoveIcon />
          </span>
          <img
            id={id}
            src={img}
            alt={title}
          />
          <div className='mini-popup-title'>
            <p>{title}</p>
          </div>
        </div>
      ) : (
        console.log('false')
      )}
    </>
  );
};

export default CartItem;
