# Arrays ![Docs](https://img.shields.io/badge/Documentation%20Status-10--40%25%20Rough%20Outline-red?logo=Read%20the%20Docs)

## Readings

- [MDN Array Page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) - 
- [MDN NodeList Page](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) - 

----

## Guessing Game

The [guessing](./demos/guessing/main.js) game is a more complex example that uses looping to allow a user to enter letters in trying to guess a word. It also illustrates how a string can be treated as an **array** of characters.

----

## *TBD*

> An ad-hoc demonstration involving the following:
> 
> - Array creation/editing with `.push()` and `.pop()` and `.length`
> - Moving information from one unordered list to another unordered list

----

## JS MasterMind

> by **Branko Tomic** - as extracted from [klomontes/js-mastermind](https://github.com/klomontes/js-mastermind) ([MIT License](https://github.com/klomontes/js-mastermind/blob/master/LICENSE))

TODO:

- Play the [game](http://klomontes.github.io/js-mastermind/)
- Examine the code for the mastermind game.

----

## Slideshow *(Practice)*

The slideshow demo presents us with the opportunity to create a carousel of images that the user can click through. The file names for the images are maintained in an **array**. The [current implementation](./demos/slideshow/js/main.js) is incomplete, however, because we want to provide another means of navigating the images: "bullets" that can be clicked to choose a specific image in the carousel.

![Bullet Navigation](./images/bullet-nav.jpg)

### Adding Bullet Navigation

First, let's add a global variable to track which image we are showing.

```js
// Variable to track which image we are showing
let imageTracker = document.querySelector('.image-tracker');
```

Then, let's add the appropriate number of selector bullets for however many images we have.

```js
// add the appropriate number of selector bullets
for (let idx = 0; idx < images.length; idx += 1) {
    imageTracker.innerHTML += '<span class="control" data-idx="' + idx + '">&bull;</span>';
}
```

In the event listener for the carousel, let's address the situation of the selector bullet being clicked by adding an `else` block.

```js
        } else {
            // selector bullet clicked
            currentImg = target.dataset.idx;
        }
```

Finally, in the same event listener for the carousel, we need to update the selection bullets to indicate which is the active bullet.

```js
        // update the active selector bullet
        imageTracker.querySelector('span.active').classList.remove('active');
        imageTracker.querySelectorAll('span')[currentImg].classList.add('active');
```

> **Slide Show KeyDown** - There is an issue with the current implementation of the slideshow with clickable bullets. The issue can be reproduced by clicking the second bullet and then immediately clicking the .next button. Try to see what the cause of this issue is and think of how to solve it. <!-- currentImg = Number(target.dataset.idx); // required to prevent breakage! -->

### Preventing Array Index Overflows/Underflows

```js
            if (currentImg === images.length) {
                currentImg = 0;
            }
```

```js
            if (currentImg === -1) {
                currentImg = images.length - 1;
            }
```

### Adding Keyboard Navigation

```js

document.addEventListener('keydown', function (evt) {
    var click;

    switch (evt.keyCode) {
        case 37:
            // left arrow
            click = new MouseEvent('click', {
                'bubbles': true
            });
            document.querySelector('.prev').dispatchEvent(click);
            break;
        case 39:
            // right arrow
            click = new MouseEvent('click', {
                'bubbles': true
            });
            document.querySelector('.prev').dispatchEvent(click);
            break;
    }
});
```
