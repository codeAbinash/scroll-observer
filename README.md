# Scroll Observer
![Image](https://img.shields.io/github/size/codeabinash/scroll-observer/index.min.js)
![Image](https://img.shields.io/github/license/codeabinash/scroll-observer)

<img src="https://codeabinash.github.io/scroll-observer/images/logo.jpg" width="100%">

# [Live Example](https://codeabinash.github.io/scroll-observer/example/)


## Introduction
ScrollObserver A lightweight⚡(less than 1KB) JavaScript library to animate easily elements on scroll into view.
## How it works
When a DOM element is onscreen it adds `shown` class to it and when offscreen removes that `shown` class.
## How to use
```js
scrollObserver('.card')
```

The above JavaScript code adds and removes the `shown` class to the elements which have `card` class (select elements like `querySelectorAll()`) when they are onscreen and offscreen respectively.


You can pass multiple selectors as an array of string.
```js
scrollObserver(['.card', '.box'])
```


## CSS
Write css of `.card` and `.card.shown` like this
```css
.card{
    ...
    ...
    transition: 400ms;
    opacity : 0;
}
.card.shown {
    opacity: 1;
}
```

## Features
### options argument
```js
const options = {
    root : document.querySelector('.container'),
    rootMargin : '10px',
    threshold: [0, 0.25, 0.5, 0.75, 1],
    
    once: true,
    onshow: function (entry) {
        console.log("Showing ")
    },
    
    onhide: function (entry) {
        console.log("Hiding ")
    },
}

scrollObserver('.card', options)
```
Read more about Options argument from [MDN Docs ](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer) 

## once
If the value of once is true, it will work once.

## onshow and onhide
They are callback functions. They are called when the element becomes onscreen or offscreen

## root, rootMargin, threshold
Read them from [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer)







## Example
- index.html
- style.css
- script.js


### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scroll Observer</title>
    <script src="./script.js" type="module" defer></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="card">
        <h1>Scroll Observer</h1>
    </div>
    <div class="card">
        <h1>Scroll Observer</h1>
    </div>
    <div class="card">
        <h1>Scroll Observer</h1>
    </div>
    <div class="card">
        <h1>Scroll Observer</h1>
    </div>
    <div class="card">
        <h1>Scroll Observer</h1>
    </div>
    <div class="card">
        <h1>Scroll Observer</h1>
    </div>
    <div class="card">
        <h1>Scroll Observer</h1>
    </div>
    <div class="card">
        <h1>Scroll Observer</h1>
    </div>
</body>
</html>
```


### style.css
```css
*{
    font-family: Arial, Helvetica, sans-serif;
}
.card{
    width: min(90%, 500px);
    aspect-ratio: 2 / 1;
    margin-inline: auto;
    background-color: hsl(61, 70%, 70%);
    display: grid;
    place-items: center;
    margin-block: 7%;
    border-radius: 10px;
    transition: 400ms;
    opacity: 0;
    scale: 0.8;
}
.card.shown {
    opacity: 1;
    scale: 1;
}
```

### script.js
```js
import scrollObserver from 'https://codeabinash.github.io/scroll-observer/index.min.js'
scrollObserver('.card')
```