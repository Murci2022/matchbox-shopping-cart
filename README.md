# Shopping cart app

![](./screenshot.png)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [My favorite code](#my-favorite-code)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This Shopping-Cart App includes all the cool features redux toolkit has to offers, things like store, slice, reducers, action creators and of course create async-thunk.

# Password generator app

![Design preview for the Password generator app coding challenge](./preview.png)

## Welcome! 👋

## The challenge

The task I took up was to construct a Shopping Cart App equipped with the following user functionalities:

- Dynamically updating the total price and quantity as items are added or removed
- Clearing all items from the cart
- Adjusting the quantity of individual items directly from the cart
- Implementing hover and focus states to all interactive elements on the page

The app was built using React and Redux Toolkit to provide a smooth and intuitive shopping experience, enabling users to manage their virtual cart with unparalleled precision and convenience.

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL:

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS) -

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
