// your js here...
// const images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
const images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg', 'mountain4.jpg', 'mountain5.jpg'];
var currentImg = 0;
var idx;

// <<Start of your code changes...>>
// <</end of your code changes>>

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0];

// add the appropriate number of selector bullets
for (idx = 0; idx < images.length; idx += 1) {
    document.querySelector('.image-tracker').innerHTML += '<span data-idx="' + idx + '">&bull;</span>';
}

// highlight the first bullet as 'active'
document.querySelector('.image-tracker').querySelector('span').classList.add('active');

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function(evt) {
    var target = evt.target;
    if (target.classList.contains('control') || target.hasAttribute('data-idx')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
            currentImg = (currentImg >= images.length) ? 0 : currentImg;
        } else if (target.classList.contains('prev')) {
            // move to the previous index in the array
            currentImg -= 1;
            currentImg = (currentImg < 0) ? images.length - 1 : currentImg;
            //         if(we went past first) then use last otherwise no changes
        } else {
            // selector bullet clicked
            // use Number() to convert from string to number
            currentImg = Number(target.dataset.idx);
        }

        // Call our function
        updateSlide(currentImg);
    }
});

// add a keypress event listener for left/right navigation
document.addEventListener('keydown', function(evt) {
    var click;
    switch (evt.code) { // evt.code is the proper replacement for evt.keyCode
        case "ArrowRight":// 39:
            // right arrow, trigger .next click
            click = document.createEvent('HTMLEvents');
            click.initEvent('click', true, true);
            document.querySelector('.carousel .control.next').dispatchEvent(click);
            break;
        case "ArrowLeft": //37:
            // left arrow, trigger .prev click
            click = document.createEvent('HTMLEvents');
            click.initEvent('click', true, true);
            document.querySelector('.carousel .control.prev').dispatchEvent(click);
            break;
    }
});