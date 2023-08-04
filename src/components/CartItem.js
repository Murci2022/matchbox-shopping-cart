import React from 'react';

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article>
      {/*   <img
        src={img}
        alt={title}
      /> */}
      <h4>{title}</h4>
    </article>
  );
};

export default CartItem;
