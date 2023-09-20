// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;
var idx;

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

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
        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
        } else {
        	// selector bullet clicked
    		currentImg = target.dataset.idx;
        }
        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        // update the active selector bullet
        document.querySelector('.image-tracker .active').classList.remove('active');
    	document.querySelectorAll('[data-idx]')[currentImg].classList.add('active');
    }
}); 
