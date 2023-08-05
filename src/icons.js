import logo from './images/matchbox-studios.png';
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
    <span class='remove-icon material-symbols-outlined'>
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

export const ChevronDown = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='white'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19 9l-7 7-7-7'
      />
    </svg>
  );
};

export const ChevronUp = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='white'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M5 15l7-7 7 7'
      />
    </svg>
  );
};
