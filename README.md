## Welcome! 👋

## Overview

Welcome to my Matchbox Shopping Cart App built with React.js and TypeScript.
This project includes all the cool features Redux Toolkit has to offers, such as store, slice, reducers, action creators with a seamless shopping experiance for the user, enchanced by the presence of beautiful vintage Matchbox cars.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned-from-this-challenge)
  - [My favorite code](#my-favorite-code)
  - [Continued development](#continued-development)
  - [Acknowledgments](#acknowledgments)
- [Author](#author)

## The challenge

The task I took up was to design and construct a Matchbox Shopping Cart App equipped with the following user functionalities:

- Dynamically updating the total price and quantity as items are added or removed
- Add and delete items to the cart
- Clearing all items from the cart
- Reset cart to default
- Adjust and decrease the quantity of individual items directly from the cart
- Implementing hover and focus states to all interactive elements on the page
- Pop-up window for clicked items with cancel function

The app was built using React and Redux Toolkit to provide a smooth and intuitive shopping experience, enabling users to manage their virtual cart with unparalleled precision and convenience with a great user experiance.

### Screenshot

![preview for the matchbox-shopping-cart app](/src/images/screenshot.png)

### Links

- Live Site URL: (https://matchbox-shopping-cart.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS) -

### What I learned from this challenge

Developing the Matchbox Shopping Cart App using React and Redux Toolkit was a comprehensive learning experience. Through this challenge, I gained valuable insights into state management with Redux-Toolkit. I learned to dynamically update totals, handle adding/removing items, and provide user-friendly features like cart reset and quantity adjustments. Implementing hover/focus states enhanced interactivity, and the pop-up window improved user engagement. Through this experience, I refined my ability to deliver a seamless and intuitive user experience, achieving a cart management solution that's both functional and enjoyable, all within a compact yet powerful implementation.

### My favorite code

My favorites from this challenge:

```js
   newItem: (state, action) => {
      let newItem;
      for (let i = 0; i < Items.length; i++) {
        const itemExists = state.cartItems.some(
          (item) => item.id === Items[i].id
        );
        if (!itemExists) {
          newItem = Items[i];
          break;
        }
      }
      if (!newItem) return;

      state.cartItems = [...state.cartItems, newItem];
    },


```

- Within the loop, the itemExists variable is assigned the result of the state.cartItems.some() function.
- The some() function checks if at least one element in the cartItems array has the same id as the current element in the Items array being iterated.
- If such an element is found in the cart, itemExists will be true.
- If itemExists is false, it means the current element in the Items array is not present in the cartItems array, making it a new, unique item that can be added. In this case, the current element is assigned to newItem, and the loop is immediately broken using the break statement. This ensures that we find the first unique item and do not continue iterating through the Items array unnecessarily.
- After the loop, there is a check for newItem. If newItem is not set (i.e., still undefined), it means that there are no new unique items left to add, and the reducer simply returns early without modifying the state.
- If a newItem is found, it means we have a new unique item to add to the cart. The reducer uses the spread operator [...state.cartItems, newItem] to create a new array with all the existing items from cartItems and the new newItem. This new array is then assigned to state.cartItems, effectively updating the state with the new item added to the cart.

```css
.cart-item {
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: auto 0.8fr 0.4fr;
  grid-column-gap: 2rem;
  margin: 1.5rem 0;
  background-color: #070446;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.grid-item-1 {
  overflow: hidden;
  cursor: pointer;
}
.cart-item img {
  width: 17rem;
  height: 6rem;
  object-fit: cover;
  transition: 0.1s linear;
}
.cart-item img:hover {
  transform: scale(1.1);
  object-fit: cover;
}
```

- this code creates a grid layout for a cart item with an image.
- On hover, the image scales up smoothly with a transition effect.
- The image overflow is hidden, and it is set to cover the container.

### Continued development

In future projects, I want to focus on the following areas to improve my skills:

- State Management: Advanced State Management using Redux-Toolkit with React.

- Data Fetching: Seamless Data Fetching implementation.

- Typescript: Deepening my Typescript skills.

### Usefull resources

- [Redux-Toolkit Documentation](https://redux-toolkit.js.org/)

- [FullStack Labs](https://www.fullstacklabs.co/blog/using-redux-toolkit-with-reactjs)

### Acknowledgments

Thank you to FullStack Lab for providing valuable resources and guidance.

### Author

- Website - [Murci2022/Maté Kamaras](https://portfolio-mate.vercel.app/) - Personal portfolio showcasing my web development journey and projects.
