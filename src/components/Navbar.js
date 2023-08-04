import React from 'react';
import { CartIcon } from '../icons';
import { MatchboxLogo } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  //console.log(cart);
  return (
    <>
      <nav>
        <div className='nav-center'>
          <MatchboxLogo />
          <div className='nav-container'>
            <CartIcon />
            <div className='amount-container'>
              <p className='total-amount'>{cart.amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
