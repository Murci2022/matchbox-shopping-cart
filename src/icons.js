import logo from './images/matchbox-studios-logo.png';
export const CartIcon = () => {
  return (
    <div>
      {/* Other content here */}
      <span className='cart-icon material-symbols-outlined'>shopping_cart</span>
    </div>
  );
};

export const AddIcon = () => {
  return (
    <span className='add-decrease-icon material-symbols-outlined'>add</span>
  );
};
export const DecreaseIcon = () => {
  return (
    <span className='add-decrease-icon material-symbols-outlined'>remove</span>
  );
};
export const RemoveIcon = () => {
  return (
    <span className='remove-icon material-symbols-outlined'>
      disabled_by_default
    </span>
  );
};

export const MatchboxLogo = () => {
  return (
    <div className='matchbox-logo'>
      {/* Other content here */}
      <img
        src={logo}
        alt='Matchbox Logo'
      />
    </div>
  );
};
