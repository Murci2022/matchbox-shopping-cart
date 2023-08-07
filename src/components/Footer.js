import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { total } = useSelector((store) => store.cart);

  return (
    <footer>
      <div className='footer-conti'>
        <hr />

        <div className='cart-total'>
          {' '}
          <h4>total</h4>
          <h4>
            <span>{total.toFixed(2)}€</span>
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
