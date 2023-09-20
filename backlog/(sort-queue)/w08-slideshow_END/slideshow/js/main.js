// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

document.querySelector('.carousel').addEventListener('click', function (evt){
    var target = evt.target;
    if (target.classList.contains('control')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
        }
        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

    }

}); 
