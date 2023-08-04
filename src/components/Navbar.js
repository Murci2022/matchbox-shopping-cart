import React from 'react';
import { CartIcon } from '../icons';
import { MatchboxLogo } from '../icons';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='nav-center'>
          <MatchboxLogo />
          <div className='nav-container'>
            <CartIcon />
            <div className='amount-container'>
              <p className='total-amount'>0</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
