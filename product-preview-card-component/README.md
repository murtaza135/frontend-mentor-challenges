# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./other/screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I wanted to start getting into more efficient ways of dealing with responsive design. This meant looking more into css functions like min, max, clamp, etc, instead of directly jumping into media queries.

I managed to use clamp for somewhat responsive padding for the card-data in _components.css. I tried using the minmax function for a responsive CSS grid, however I could not get it to work along side changing the card-image from the mobile version to the desktop version, hence a media query had to be used for the layout of the card in order to maintain consistency.

Here is an example of the clamp function for padding that I used:

```css
.card-data {
  display: grid;
  gap: clamp(1rem, 4vw, 1.5rem);
  padding: clamp(1.5rem, 4vw, 2rem);
}
```

### Useful resources

- [Kevin Powell](https://www.youtube.com/kepowob) - I generally like how Kevin Powell writes his CSS, and find him to be a great resource.
- [3 modern CSS techniques for responsive design by Kevin Powell](https://www.youtube.com/watch?v=VsNAuGkCpQU) - This helped me implement the clamp function.

## Author
- Frontend Mentor - [@murtaza135](https://www.frontendmentor.io/profile/murtaza135)
