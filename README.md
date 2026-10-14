# Article-preview-component
This is a my solution to the Article preview component challenge on Frontend Mentor

# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

- HERE YOU CAN WATCH THE  OVERVIEWS :

![](../assets/images/overView/htmlOverview.JPG)
![](../assets/images/overView/cssOverview.JPG)
![](../assets/images/overView/javaOverview.JPG)


### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](../assets/images/screenShot/desctopScreen.JPG)
![](../assets/images/screenShot/desctopScreen2.JPG)
![](../assets/images/screenShot/laptopScreenShot.jpg)
![](../assets/images/screenShot/mobileactiveScreenshot.jpg)
![](../assets/images/screenShot/tabletScreenShot.jpg)


### Links

- Solution URL: [click](https://github.com/MR-M4N1/Article-preview-component.git)
- Live Site URL: [click](https://mr-m4n1.github.io/Article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Resposive
- Love

### What I learned

During this project, I learned how to use the following CSS properties and JavaScript methods:

### 1. CSS `object-fit` and `object-position`

I learned how to control how images fit inside their containers using `object-fit`, and how to adjust their position using `object-position`.

```css
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

### 2. JavaScript `matchMedia()`

I learned how to use `matchMedia()` to check whether a specific media query matches the current viewport, allowing me to implement different behaviors for different screen sizes.

```js
const mediaQuery = window.matchMedia("(min-width: 1024px)");

if (mediaQuery.matches) {
  // Desktop behavior
} else {
  // Mobile and tablet behavior
}
```

### Continued development

In future projects, I want to improve my JavaScript skills, especially working with event listeners, conditional statements, and media queries.

I also want to deepen my understanding of responsive web design and learn how to handle different screen sizes more efficiently.


## AI Collaboration

I used ChatGPT to help me solve problems that I couldn't resolve on my own. I would like to express my gratitude to OpenAI and ChatGPT for their assistance and support throughout this project.

## Author

- Frontend Mentor - [@Mr-M4n1](https://www.frontendmentor.io/profile/MR-M4N1)
- Github - [@Mr-M4n1](https://github.com/MR-M4N1)



