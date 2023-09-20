// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;
var idx;
var preloadIdx;
var img;

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0];

//////////////////////////////////////////////////////
//             BEGING IMAGE PRELOADING              //
//////////////////////////////////////////////////////

// METHOD 1
// load remaining images (begin at 1 to skip the first...)
/*

for (preloadIdx = 0; = 1; preloadIdx = 0; < images.length; preloadIdx = 0; += 1) {
    img = new Image();
    img.src = 'images/' + images[preloadIdx = 0;];
}
*/

// METHOD 2
// begin at 0 because the index will be incremented before
// assigning the source, effectively skipping the first 
// element.  If you want to load all images (including the 
// first), initialize preloadIdx to -1
preloadIdx = 0;

function preload() {
    preloadIdx += 1;
    if (preloadIdx < images.length) {
        img = document.createElement('img');
        img.addEventListener('load', preload);    
        img.src = 'images/' + images[preloadIdx];
    }
}
// begin the preload
preload();

// END IMAGE PRELOADING //////////////////////////////


// add the appropriate number of selector bullets
for (idx = 0; idx < images.length; idx += 1) {
	document.querySelector('.image-tracker').innerHTML += '<span data-idx="' + idx + '">&bull;</span>';
}

// highlight the first bullet as 'active'
document.querySelector('.image-tracker').querySelector('span').classList.add('active');

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function (evt){
    var target = evt.target;
    if (target.classList.contains('control')
    	|| target.hasAttribute('data-idx')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
            currentImg = (currentImg >= images.length)? 0 : currentImg;
        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
            currentImg = (currentImg < 0)? images.length - 1 : currentImg;
        } else {
        	// selector bullet clicked
    		currentImg = Number(target.dataset.idx);
        }

        // use universal function
        changeImage(currentImg);
    }
});

// add a keypress event listener for left/right navigation
document.addEventListener('keydown', function (evt) {
	var click;
	switch (evt.keyCode) {
		case 39:
			// right arrow, trigger .next click
			click = document.createEvent('HTMLEvents');
			click.initEvent('click', true, true);
			document.querySelector('.carousel .control.next').dispatchEvent(click);
			break;
		case 37:
			// left arrow, trigger .prev click
			click = document.createEvent('HTMLEvents');
			click.initEvent('click', true, true);
			document.querySelector('.carousel .control.prev').dispatchEvent(click);
			break;
	}
});

function changeImage(index) {
	// display the new current image
    document.querySelector('.carousel>img').src = 'images/' + images[index];

    // update the active selector bullet
    document.querySelector('.image-tracker .active').classList.remove('active');
	document.querySelectorAll('[data-idx]')[currentImg].classList.add('active');
}
